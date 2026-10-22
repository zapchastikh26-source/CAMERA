// Native links keep working even if analytics is unavailable.
(function () {
  'use strict';
  document.querySelectorAll('[data-telegram-contact]').forEach(function (link) {
    link.addEventListener('click', function () {
      try {
        if (window.ttq && typeof window.ttq.track === 'function') {
          window.ttq.track('Contact', {
            contact_method: 'telegram',
            button_location: link.dataset.telegramContact
          });
        }
      } catch (_) {
        // Tracking must never interrupt navigation.
      }
    });
  });
}());
