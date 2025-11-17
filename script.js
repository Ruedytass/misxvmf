// Configuración - REEMPLAZA con tu URL de Google Apps Script
const SCRIPT_URL = 'https://docs.google.com/spreadsheets/d/1AZi_rX-2qvJQiqx8c-TNvkVjUWAERtAoX0rdnPbR3xY/edit?usp=sharing';

// Variables globales
let currentTicketData = null;

// Cuenta regresiva
function actualizarCountdown() {
    const fechaEvento = new Date('january 17, 2026 19:00:00').getTime();
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
            console.log('Reproducción automática bloqueada.');
        });
        botonMusica.textContent = '🎵 Música: ON';
    }
    musicaReproduciendo = !musicaReproduciendo;
});

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ 
                behavior: 'smooth' 
            });
        }
    });
});

// Efectos de aparición al hacer scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

document.querySelectorAll('section:not(.portada)').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Confeti
function lanzarConfeti() {
    for (let i = 0; i < 100; i++) {
        setTimeout(() => crearConfeti(), i * 50);
    }
}

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

// Inicializar
const countdownInterval = setInterval(actualizarCountdown, 1000);
actualizarCountdown();

// Confeti ocasional en la portada
setInterval(crearConfeti, 300);

 // Base de datos de invitados
      const guests = [
        { familia: "Fam. Michue Burgos", invitados: 4 },
        { familia: "Fam. Vegas Alvarez", invitados: 2 },
        { familia: "Sra. Miriam Alvarez", invitados: 1 },
        { familia: "Hortencia Yamo Pinta", invitados: 1 },
        { familia: "Emilia Yamo Pinta e Hijo", invitados: 2 },
        { familia: "Fam. Chininin Yamo", invitados: 5 },
        { familia: "Delia Yamo e Hija", invitados: 2 },
        { familia: "Mayra Villavicencio e Hija", invitados: 2 },
        { familia: "Lorena Torres e Hija", invitados: 2 },
        { familia: "Fam. Yamo Cruz", invitados: 4 },
        { familia: "Fam. Yamo Villalta", invitados: 3 },
        { familia: "Lizbeth Yamo e Hijos", invitados: 4 },
        { familia: "Tany Yamo e Hijos", invitados: 4 },
        { familia: "Fam. Villavicencio Yaipen", invitados: 4 },
        { familia: "Antonio Yamo", invitados: 1 },
        { familia: "Ivonne Villavicencio e Hija", invitados: 2 },
        { familia: "Elisa Vite", invitados: 2 },
        { familia: "Fam. Herrera Manzanares", invitados: 4 },
        { familia: "Jose Manzanares Peña e Hijos", invitados: 3 },
        { familia: "Martina Ortega e Hijas", invitados: 3 },
        { familia: "Melva Llacsahuanga y familia", invitados: 4 },
        { familia: "Pilar Navarrete", invitados: 2 },
        { familia: "Danitza Dioses", invitados: 1 },
        { familia: "Rocio Zarate", invitados: 2 },
        { familia: "Fam. Bautista Villadolid", invitados: 3 },
        { familia: "Sra. Lili Ordinola", invitados: 2 },
        { familia: "Fam. Bazan Gallo", invitados: 3 },
        { familia: "Fam. Bazan Cunya", invitados: 4 },
        { familia: "Kevin Bazan Gallo", invitados: 1 },
        { familia: "Daniela Sanchez e Hijo", invitados: 2 },
        { familia: "Fam. Bazan Madrid", invitados: 2 },
        { familia: "Carlos Bazan Gallo", invitados: 1 },
        { familia: "Diana Bazan Gallo", invitados: 1 },
        { familia: "Yanira Hidalgo Cruz", invitados: 2 },
        { familia: "Cielo Perez Vargas", invitados: 1 },
        { familia: "Nicol Paico More", invitados: 2 },
        { familia: "Luna Aguirre Razuri", invitados: 2 },
        { familia: "Andrea Sarango Seminario", invitados: 1 },
        { familia: "Mayte Gonza Yamunaque", invitados: 2 },
        { familia: "Fam. Hernandez Aguirre", invitados: 3 },
        { familia: "Mariana Lisbeth Encalada Rosas", invitados: 3 },
        { familia: "Genesis del Alba", invitados: 2 },
        { familia: "Mariana Belen Chero Tocto", invitados: 2 },
        { familia: "Wilson Silva Ruiz", invitados: 1 },
        { familia: "Luis Parrilla Sanchez", invitados: 1 },
        { familia: "Mateo Alonso Gonzales Merino", invitados: 1 },
        { familia: "Gabriel Cardenas Talledo", invitados: 1 },
        { familia: "Fabricio Portocarrero", invitados: 1 },
        { familia: "Franco Granda Inga", invitados: 1 },
        { familia: "Enzo Lopez Bances", invitados: 1 },
        { familia: "Anghello Mauricio Lopez Chavez", invitados: 1 },
        { familia: "Maria Jose Sernaque Villalta", invitados: 1 },
        { familia: "Ariana Dioses Razuri", invitados: 1 },
        { familia: "Belen Cabrera Neyra", invitados: 2 },
        { familia: "Ariana", invitados: 2 },
      ];

      // Elementos DOM
      const searchInput = document.getElementById("searchInput");
      const searchButton = document.getElementById("searchButton");
      const resultsSection = document.getElementById("resultsSection");
      const familyName = document.getElementById("familyName");
      const guestCount = document.getElementById("guestCount");
      const generatePdfButton = document.getElementById("generatePdf");
      const resetSearchButton = document.getElementById("resetSearch");
    // Buscar invitado
      function searchGuest() {
        const searchTerm = searchInput.value.trim().toLowerCase();

        if (searchTerm === "") {
          alert("Por favor, ingresa un nombre para buscar.");
          return;
        }

        const foundGuest = guests.find((guest) =>
          guest.familia.toLowerCase().includes(searchTerm)
        );

        if (foundGuest) {
          familyName.textContent = foundGuest.familia;
          guestCount.textContent = foundGuest.invitados;
          resultsSection.style.display = "block";

          // Desplazarse a la sección de resultados
          resultsSection.scrollIntoView({ behavior: "smooth" });
        } else {
          alert(
            "No se encontró la familia especificada. Verifica el nombre e intenta nuevamente."
          );
        }
      }

      // Generar PDF
      function generatePDF() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        const family = familyName.textContent;
        const count = guestCount.textContent;

        // Configuración del documento
        doc.setFontSize(20);
        doc.setTextColor(138, 12, 74);
        doc.text("INVITACIÓN XV AÑOS", 105, 30, null, null, "center");

        doc.setFontSize(16);
        doc.setTextColor(181, 101, 118);
        doc.text("María Félix", 105, 45, null, null, "center");

        // Línea decorativa
        doc.setDrawColor(181, 101, 118);
        doc.setLineWidth(0.5);
        doc.line(20, 55, 190, 55);

        // Información del evento
        doc.setFontSize(12);
        doc.setTextColor(0, 0, 0);
        doc.text("Fecha: Sábado, 17 de enero 2026", 20, 70);
        doc.text("Hora: 8:00 PM", 20, 80);
        doc.text('Casino de Empleados Civiles del Ejército', 20, 90);
        doc.text("Jr. Arena Nº 802 Urb. Bancarios I Etapa – Piura ", 20, 100);

        // Información del invitado
        doc.setFontSize(14);
        doc.setTextColor(138, 12, 74);
        doc.text("INFORMACIÓN DEL INVITADO", 20, 120);

        doc.setFontSize(12);
        doc.setTextColor(0, 0, 0);
        doc.text(`Familia: ${family}`, 20, 135);
        doc.text(`Número de pases: ${count}`, 20, 145);

        // Código QR simulado
        doc.setFillColor(240, 240, 240);
        doc.rect(130, 120, 60, 60, "F");
        doc.setTextColor(150, 150, 150);
        doc.text("CÓDIGO QR", 145, 150, null, null, "center");

        // Nota importante
        doc.setFontSize(10);
        doc.setTextColor(100, 100, 100);
        doc.text(
          "Este pase es personal e intransferible. Presentar en la entrada.",
          20,
          190
        );
        doc.text("Para consultas: +51 959301890", 20, 200);

        // Guardar el PDF
        doc.save(`pase_${family.replace(/\s+/g, "_")}.pdf`);
      }

      // Reiniciar búsqueda
      function resetSearch() {
        searchInput.value = "";
        resultsSection.style.display = "none";
        searchInput.focus();
      }
           // Event listeners
      searchButton.addEventListener("click", searchGuest);
      searchInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
          searchGuest();
        }
      });
      generatePdfButton.addEventListener("click", generatePDF);
      resetSearchButton.addEventListener("click", resetSearch);

      // Inicializar la página
      document.addEventListener("DOMContentLoaded", function () {
        // Enfocar el campo de búsqueda al cargar la página
        searchInput.focus();

      });
