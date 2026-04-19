import { extractAndShow } from './core.js';

(function() {
  // Robust script loader that checks for success and uses crossOrigin
  function loadScript(src, check, cb) {
    if (window[check]) {
      cb();
      return;
    }
    var s = document.createElement('script');
    s.src = src;
    s.crossOrigin = 'anonymous'; // Prevents CORB issues
    s.onload = function() {
      if (window[check]) {
        cb();
      } else {
        alert('Failed to load ' + check);
      }
    };
    s.onerror = function() {
      alert('Network error loading ' + check);
    };
    document.head.appendChild(s);
  }

  // Load from jsDelivr to prevent redirect blocks
  function init() {
    loadScript('https://cdn.jsdelivr.net/npm/@mozilla/readability/Readability.js', 'Readability', function() {
      loadScript('https://cdn.jsdelivr.net/npm/turndown/dist/turndown.min.js', 'TurndownService', function() {
        loadScript('https://cdn.jsdelivr.net/npm/marked/marked.min.js', 'marked', function() {
          extractAndShow(window.Readability, window.TurndownService, window.marked);
        });
      });
    });
  }

  init();
})();
