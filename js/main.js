/* ============================================================
   US Hockey Gold — Main JavaScript
   Smooth scroll, parallax, particles, nav, scroll animations
   ============================================================ */

(function () {
  'use strict';

  // --- Gold Particles ---
  function createParticles() {
    const container = document.getElementById('hero-particles');
    if (!container) return;
    const count = window.innerWidth < 768 ? 15 : 30;
    for (let i = 0; i < count; i++) {
      const particle = document.createElement('div');
      particle.classList.add('hero-particle');
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 6 + 's';
      particle.style.animationDuration = (4 + Math.random() * 4) + 's';
      particle.style.width = particle.style.height = (2 + Math.random() * 4) + 'px';
      container.appendChild(particle);
    }
  }

  // --- Sticky Nav ---
  function initNav() {
    const nav = document.getElementById('nav');
    const toggle = document.getElementById('nav-toggle');
    const links = document.getElementById('nav-links');

    window.addEventListener('scroll', function () {
      nav.classList.toggle('scrolled', window.scrollY > 80);
    }, { passive: true });

    if (toggle && links) {
      toggle.addEventListener('click', function () {
        links.classList.toggle('open');
      });
      links.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          links.classList.remove('open');
        });
      });
    }
  }

  // --- Active Nav Link ---
  function initActiveNav() {
    var sections = document.querySelectorAll('section[id]');
    var navLinks = document.querySelectorAll('.nav-links a');

    function updateActive() {
      var scrollY = window.scrollY + 100;
      sections.forEach(function (section) {
        var top = section.offsetTop;
        var height = section.offsetHeight;
        var id = section.getAttribute('id');
        if (scrollY >= top && scrollY < top + height) {
          navLinks.forEach(function (link) {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + id) {
              link.classList.add('active');
            }
          });
        }
      });
    }

    window.addEventListener('scroll', updateActive, { passive: true });
    updateActive();
  }

  // --- Parallax ---
  function initParallax() {
    var heroBg = document.querySelector('.hero-bg');
    if (!heroBg || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    var ticking = false;
    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(function () {
          var scrolled = window.scrollY;
          if (scrolled < window.innerHeight) {
            heroBg.style.transform = 'translateY(' + scrolled * 0.3 + 'px)';
          }
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // --- Scroll CTA ---
  function initScrollCTA() {
    var btn = document.getElementById('hero-scroll');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var story = document.getElementById('story');
      if (story) story.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // --- Fade-in on Scroll ---
  function initFadeIn() {
    var elements = document.querySelectorAll('.fade-in');
    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

      elements.forEach(function (el) { observer.observe(el); });
    } else {
      elements.forEach(function (el) { el.classList.add('visible'); });
    }
  }

  // --- Lightbox ---
  function initLightbox() {
    var lightbox = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightbox-img');
    var lightboxCaption = document.getElementById('lightbox-caption');
    var lightboxClose = document.getElementById('lightbox-close');
    if (!lightbox) return;

    document.querySelectorAll('.gallery-item').forEach(function (item) {
      item.addEventListener('click', function () {
        var img = item.querySelector('img');
        var caption = item.querySelector('.gallery-caption');
        if (img) {
          lightboxImg.src = img.src;
          lightboxImg.alt = img.alt;
        }
        if (caption) {
          lightboxCaption.textContent = caption.textContent;
        }
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    function closeLightbox() {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }

    lightboxClose.addEventListener('click', function (e) {
      e.stopPropagation();
      closeLightbox();
    });

    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
      }
    });
  }

  // --- Init ---
  document.addEventListener('DOMContentLoaded', function () {
    createParticles();
    initNav();
    initActiveNav();
    initParallax();
    initScrollCTA();
    initFadeIn();
    initLightbox();
  });
})();
