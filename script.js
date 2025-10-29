 // Cuenta regresiva
function actualizarCountdown() {
    const fechaEvento = new Date('November 15, 2025 19:00:00').getTime();
    const ahora = new Date().getTime();
    const diferencia = fechaEvento - ahora;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById('dias').textContent = dias.toString().padStart(2, '0');
    document.getElementById('horas').textContent = horas.toString().padStart(2, '0');
    document.getElementById('minutos').textContent = minutos.toString().padStart(2, '0');
    document.getElementById('segundos').textContent = segundos.toString().padStart(2, '0');

    if (diferencia < 0) {
        clearInterval(countdownInterval);
        document.querySelector('.countdown').innerHTML = '<h3>¡El gran día ha llegado!</h3>';
    }
}

// Control de música
const musica = document.getElementById('musicaFondo');
const botonMusica = document.getElementById('botonMusica');
let musicaReproduciendo = false;

botonMusica.addEventListener('click', function() {
    if (musicaReproduciendo) {
        musica.pause();
        botonMusica.textContent = '🎵 Música: OFF';
    } else {
        musica.play().catch(e => {
            console.log('Reproducción automática bloqueada. El usuario debe interactuar primero.');
        });
        botonMusica.textContent = '🎵 Música: ON';
    }
    musicaReproduciendo = !musicaReproduciendo;
});

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Efecto de aparición al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar todas las secciones excepto la portada
document.querySelectorAll('section:not(.portada)').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Inicializar
const countdownInterval = setInterval(actualizarCountdown, 1000);
actualizarCountdown();

// Efecto de confeti (simple)
function crearConfeti() {
    const confeti = document.createElement('div');
    confeti.style.position = 'fixed';
    confeti.style.width = '10px';
    confeti.style.height = '10px';
    confeti.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
    confeti.style.top = '0';
    confeti.style.left = `${Math.random() * 100}vw`;
    confeti.style.pointerEvents = 'none';
    confeti.style.zIndex = '9999';
    confeti.style.borderRadius = '50%';
    document.body.appendChild(confeti);

    const animation = confeti.animate([
        { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
        { transform: `translateY(${window.innerHeight}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
    ], {
        duration: Math.random() * 3000 + 2000,
        easing: 'cubic-bezier(0.1, 0.2, 0.8, 0.9)'
    });

    animation.onfinish = () => confeti.remove();
}

// Lanzar confeti ocasionalmente
setInterval(crearConfeti, 300);