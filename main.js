// Año dinámico en el footer
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll suave al hacer clic en los enlaces del menú (refuerzo del scroll-behavior CSS)
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener('click', function (e) {
    var targetId = this.getAttribute('href');
    if (targetId.length > 1) {
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});