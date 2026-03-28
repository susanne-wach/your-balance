/* ================================================================
   YOUR BALANCE – SUSANNE WACHTER
   Premium JavaScript – WOW Effects
   ================================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ----------------------------------------------------------
     1. PAGE LOADER
  ---------------------------------------------------------- */
  const loader = document.querySelector('.loader');
  if (loader) {
    window.addEventListener('load', () => {
      setTimeout(() => loader.classList.add('hidden'), 800);
    });
    // Fallback
    setTimeout(() => loader.classList.add('hidden'), 2500);
  }

  /* ----------------------------------------------------------
     2. CUSTOM CURSOR
  ---------------------------------------------------------- */
  const cursorDot  = document.querySelector('.cursor-dot');
  const cursorRing = document.querySelector('.cursor-ring');

  if (cursorDot && cursorRing) {
    let mx = -100, my = -100;
    let rx = -100, ry = -100;

    document.addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      cursorDot.style.left  = mx + 'px';
      cursorDot.style.top   = my + 'px';
    });

    // Ring follows with lag
    const animRing = () => {
      rx += (mx - rx) * 0.14;
      ry += (my - ry) * 0.14;
      cursorRing.style.left = rx + 'px';
      cursorRing.style.top  = ry + 'px';
      requestAnimationFrame(animRing);
    };
    animRing();

    // Hover state on interactive elements
    const hoverEls = document.querySelectorAll('a, button, .btn, .card, .testimonial, [data-magnetic]');
    hoverEls.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursorDot.classList.add('hover');
        cursorRing.classList.add('hover');
      });
      el.addEventListener('mouseleave', () => {
        cursorDot.classList.remove('hover');
        cursorRing.classList.remove('hover');
      });
    });

    // Hide on leave
    document.addEventListener('mouseleave', () => {
      cursorDot.style.opacity = '0';
      cursorRing.style.opacity = '0';
    });
    document.addEventListener('mouseenter', () => {
      cursorDot.style.opacity = '1';
      cursorRing.style.opacity = '1';
    });
  }

  /* ----------------------------------------------------------
     3. NAVIGATION SCROLL
  ---------------------------------------------------------- */
  const nav = document.querySelector('.nav');
  const scrollTopBtn = document.querySelector('.scroll-top');

  const onScroll = () => {
    const y = window.scrollY;
    if (nav) {
      nav.classList.toggle('scrolled', y > 60);
    }
    if (scrollTopBtn) {
      scrollTopBtn.classList.toggle('visible', y > 400);
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ----------------------------------------------------------
     4. SMOOTH SCROLL (internal links)
  ---------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const offset = 80;
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
    });
  });

  /* ----------------------------------------------------------
     5. SCROLL-TO-TOP
  ---------------------------------------------------------- */
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* ----------------------------------------------------------
     6. SCROLL REVEAL (IntersectionObserver)
  ---------------------------------------------------------- */
  const revealEls = document.querySelectorAll('[data-reveal]');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  revealEls.forEach(el => revealObserver.observe(el));

  /* ----------------------------------------------------------
     7. STAGGER CHILDREN (auto-delay siblings)
  ---------------------------------------------------------- */
  document.querySelectorAll('[data-stagger]').forEach(parent => {
    const children = parent.children;
    Array.from(children).forEach((child, i) => {
      child.setAttribute('data-reveal', '');
      child.style.transitionDelay = (i * 0.12) + 's';
      revealObserver.observe(child);
    });
  });

  /* ----------------------------------------------------------
     8. PARALLAX HERO
  ---------------------------------------------------------- */
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg) {
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      heroBg.style.transform = `translateY(${y * 0.4}px)`;
    }, { passive: true });
  }

  /* ----------------------------------------------------------
     9. MAGNETIC BUTTONS
  ---------------------------------------------------------- */
  document.querySelectorAll('[data-magnetic]').forEach(el => {
    el.addEventListener('mousemove', e => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top  + rect.height / 2;
      const dx = (e.clientX - cx) * 0.35;
      const dy = (e.clientY - cy) * 0.35;
      el.style.transform = `translate(${dx}px, ${dy}px)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = 'translate(0, 0)';
    });
  });

  /* ----------------------------------------------------------
     10. COUNTER ANIMATION
  ---------------------------------------------------------- */
  const counters = document.querySelectorAll('[data-count]');
  const counterObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el     = entry.target;
      const target = parseInt(el.dataset.count);
      const suffix = el.dataset.suffix || '';
      const dur    = 2000;
      let start    = null;

      const step = ts => {
        if (!start) start = ts;
        const progress = Math.min((ts - start) / dur, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
        el.textContent = Math.floor(eased * target) + suffix;
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      counterObs.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(el => counterObs.observe(el));

  /* ----------------------------------------------------------
     11. GOLD LINE GROW ANIMATION
  ---------------------------------------------------------- */
  const goldLines = document.querySelectorAll('.gold-line');
  const lineObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.transition = 'width 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
        entry.target.style.width = '48px';
        lineObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  goldLines.forEach(line => {
    line.style.width = '0';
    lineObs.observe(line);
  });

  /* ----------------------------------------------------------
     12. CARD RIPPLE EFFECT
  ---------------------------------------------------------- */
  document.querySelectorAll('.card, .testimonial').forEach(card => {
    card.addEventListener('click', e => {
      const rect = card.getBoundingClientRect();
      const ripple = document.createElement('div');
      ripple.style.cssText = `
        position:absolute;width:8px;height:8px;border-radius:50%;
        background:rgba(201,168,76,0.25);pointer-events:none;z-index:0;
        left:${e.clientX - rect.left - 4}px;
        top:${e.clientY - rect.top - 4}px;
        animation:ripple 0.7s ease-out forwards;
      `;
      card.style.position = 'relative';
      card.appendChild(ripple);
      setTimeout(() => ripple.remove(), 700);
    });
  });

  // Inject ripple keyframe once
  const rippleStyle = document.createElement('style');
  rippleStyle.textContent = '@keyframes ripple{to{transform:scale(50);opacity:0}}';
  document.head.appendChild(rippleStyle);

  /* ----------------------------------------------------------
     13. MOBILE NAV
  ---------------------------------------------------------- */
  const burger = document.querySelector('.nav-burger');
  const navLinks = document.querySelector('.nav-links');
  const navCta = document.querySelector('.nav-cta');

  if (burger) {
    burger.addEventListener('click', () => {
      const isOpen = burger.classList.toggle('open');
      if (navLinks) navLinks.style.display = isOpen ? 'flex' : '';
      if (navCta) navCta.style.display = isOpen ? 'block' : '';
      if (isOpen && navLinks) {
        navLinks.style.cssText = 'display:flex;flex-direction:column;position:fixed;top:70px;left:0;right:0;background:rgba(28,18,8,0.97);padding:32px 24px;gap:20px;z-index:999;';
      }
    });
  }

  /* ----------------------------------------------------------
     14. CURSOR: POINTER STYLE FOR LINKS inside dark sections
  ---------------------------------------------------------- */
  document.querySelectorAll('a[href], .btn').forEach(el => {
    el.style.cursor = 'none';
  });

  /* ----------------------------------------------------------
     15. SMOOTH IMAGE LOAD
  ---------------------------------------------------------- */
  document.querySelectorAll('img').forEach(img => {
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.6s ease';
    if (img.complete) {
      img.style.opacity = '1';
    } else {
      img.addEventListener('load', () => img.style.opacity = '1');
    }
  });

});
