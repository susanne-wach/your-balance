// Cloudflare Worker: prüft Kontaktanfragen, bevor sie an ActiveCampaign gehen.
// Benötigte Einstellungen im Worker:
//   RECAPTCHA_SECRET  (Secret)    – geheimer reCAPTCHA-v3-Schlüssel
//   AC_FORM_ID        (Variable)  – Nummer des ActiveCampaign-Formulars
//   AC_OR             (Variable, optional) – "or"-Wert des Formulars

const ALLOWED_ORIGINS = ['https://your-balance.at', 'https://www.your-balance.at'];
const AC_URL = 'https://your-balance61093.activehosted.com/proc.php';
const MIN_SCORE = 0.5;
const MIN_MS = 3000;
const FALLBACK = 'Die Sicherheitsprüfung hat leider nicht geklappt. Bitte schreib mir direkt an susanne@your-balance.at.';

function reply(body, status, cors) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...cors, 'Content-Type': 'application/json' },
  });
}

function clean(value, max) {
  return String(value ?? '').trim().slice(0, max);
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';
    const cors = {
      'Access-Control-Allow-Origin': ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0],
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Vary': 'Origin',
    };

    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });
    if (request.method !== 'POST') return reply({ ok: false }, 405, cors);
    if (!ALLOWED_ORIGINS.includes(origin)) return reply({ ok: false }, 403, cors);

    let data;
    try {
      data = await request.json();
    } catch {
      return reply({ ok: false, message: FALLBACK }, 400, cors);
    }

    // Bots bekommen eine scheinbare Erfolgsmeldung, damit sie nicht nachjustieren.
    if (clean(data.hp_website, 200) !== '') return reply({ ok: true }, 200, cors);
    if (!(Number(data.elapsed) >= MIN_MS)) return reply({ ok: true }, 200, cors);

    const firstname = clean(data.firstname, 80);
    const email = clean(data.email, 200);
    if (!firstname || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return reply({ ok: false, message: 'Bitte Vorname und eine gültige E-Mail-Adresse angeben.' }, 400, cors);
    }

    const verify = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      body: new URLSearchParams({
        secret: env.RECAPTCHA_SECRET,
        response: clean(data.token, 4000),
        remoteip: request.headers.get('CF-Connecting-IP') || '',
      }),
    }).then((r) => r.json()).catch(() => null);

    const human = verify
      && verify.success
      && verify.action === 'contact'
      && verify.score >= MIN_SCORE
      && ['your-balance.at', 'www.your-balance.at'].includes(verify.hostname);
    if (!human) {
      const debug = verify
        ? { errors: verify['error-codes'], score: verify.score, action: verify.action, hostname: verify.hostname, secretSet: Boolean(env.RECAPTCHA_SECRET) }
        : { errors: ['verify-request-failed'], secretSet: Boolean(env.RECAPTCHA_SECRET) };
      return reply({ ok: false, message: FALLBACK, debug }, 403, cors);
    }

    const params = new URLSearchParams({
      u: env.AC_FORM_ID,
      f: env.AC_FORM_ID,
      s: '',
      c: '0',
      m: '0',
      act: 'sub',
      v: '2',
      firstname,
      lastname: clean(data.lastname, 80),
      email,
      'field[17]': clean(data['field[17]'], 50),
      'field[18]': clean(data['field[18]'], 5000),
      'field[19]': clean(data['field[19]'], 50),
    });
    if (env.AC_OR) params.set('or', env.AC_OR);

    const ac = await fetch(AC_URL, { method: 'POST', body: params }).catch(() => null);
    if (!ac || !ac.ok) {
      return reply({ ok: false, message: 'Verbindungsfehler – bitte versuche es erneut oder schreib mir direkt an susanne@your-balance.at.' }, 502, cors);
    }
    return reply({ ok: true }, 200, cors);
  },
};
