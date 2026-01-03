/* ================= WHATSAPP ================= */
function enviarWhatsApp() {
  const servicios = document.querySelectorAll(".servicio:checked");

  if (servicios.length === 0) {
    mostrarModal();
    return;
  }

  let mensaje = "Hola, quiero solicitar los siguientes servicios:\n\n";

  servicios.forEach((servicio, index) => {
    mensaje += `${index + 1}. ${servicio.value}\n`;
  });

  const telefono = "56973709203";
  const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

  window.open(url, "_blank");

  servicios.forEach(servicio => servicio.checked = false);
}

function mostrarModal() {
  document.getElementById("modal-alerta").style.display = "flex";
}

function cerrarModal() {
  document.getElementById("modal-alerta").style.display = "none";
}

/* ================= MENÚ HAMBURGUESA ================= */
const toggle = document.getElementById("menu-toggle");
const overlay = document.querySelector(".overlay");

if (overlay) {
  overlay.addEventListener("click", () => {
    toggle.checked = false;
  });
}

/* ================= MENÚ + SCROLL SUAVE ================= */
const links = document.querySelectorAll(".menu a");

links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    // activo
    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");

    // scroll suave
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    // animación sección
    target.classList.add("section-focus");
    setTimeout(() => {
      target.classList.remove("section-focus");
    }, 1200);

    // cerrar menú móvil
    toggle.checked = false;
  });
});


const btnWsp = document.querySelector(".btn-wsp");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const docHeight = document.documentElement.scrollHeight;

  // Si llega al final de la página
  if (scrollTop + windowHeight >= docHeight - 50) {
    btnWsp.classList.add("oculto");
  } else {
    btnWsp.classList.remove("oculto");
  }
});
