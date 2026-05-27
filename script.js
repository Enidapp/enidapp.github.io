function setLang(lang) {
  document.querySelectorAll('.lang-content').forEach(el => {
    el.style.display = 'none';
  });
  document.getElementById('lang-' + lang).style.display = 'block';

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.textContent.toLowerCase() === lang) {
      btn.classList.add('active');
    }
  });

  localStorage.setItem('enid-lang', lang);
}

// On load: restore saved language or use browser default
(function() {
  var saved = localStorage.getItem('enid-lang');
  var browserLang = navigator.language && navigator.language.startsWith('de') ? 'de' : 'en';
  setLang(saved || browserLang);
})();
