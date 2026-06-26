// Menú móvil
const botonMenu = document.getElementById('botonMenu');
const navMovil = document.getElementById('navMovil');

if (botonMenu && navMovil) {
  botonMenu.addEventListener('click', () => {
    const abierto = navMovil.classList.toggle('abierto');
    botonMenu.setAttribute('aria-expanded', abierto);
  });

  navMovil.querySelectorAll('a').forEach(enlace => {
    enlace.addEventListener('click', () => {
      navMovil.classList.remove('abierto');
      botonMenu.setAttribute('aria-expanded', 'false');
    });
  });
}

// Sombra del encabezado al hacer scroll
const encabezado = document.getElementById('encabezado');
if (encabezado) {
  const alScrollear = () => {
    encabezado.classList.toggle('con-sombra', window.scrollY > 12);
  };
  document.addEventListener('scroll', alScrollear);
  alScrollear();
}

// Año automático en el pie de página
const anio = document.getElementById('anio');
if (anio) anio.textContent = new Date().getFullYear();