const navLinks = document.querySelectorAll(".navbar__list-item a");
const socialLinks = document.querySelectorAll(".social__list-item a");
const btnMenu = document.getElementById("btn-menu");
const navbar = document.getElementById("navbar");
const btnClose = document.getElementById("btn-menu-close");
const btn = document.getElementById("form-span");

let screenWidth = window.innerWidth || document.documentElement.clientWidth;

if (screenWidth > 750) {
  VanillaTilt.init(document.querySelectorAll("#iconos"), {
    max: 40,
    speed: 3000,
  });
  VanillaTilt.init(document.querySelectorAll("article"), {
    max: 5,
    speed: 5000,
    glare: true,
    "max-glare": 0.2,
  });

  const cambiarClase = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.8) {
        navLinks.forEach((link) => {
          link.classList.add("white-text", "white-border");
        });
        socialLinks.forEach((link) => {
          link.style.color = "#82df8d";
        });
      } else if (!entry.isIntersecting && entry.intersectionRatio <= 0.8) {
        navLinks.forEach((link) => {
          link.classList.remove("white-text", "white-border");
        });
        socialLinks.forEach((link) => {
          link.style.color = "rgba(11, 11, 11, 0.7)";
        });
      }
    });
  };

  const options = {
    threshold: [0.3, 0.8],
  };

  const observarSeccion = (id) => {
    const section = document.querySelector(`#${id}`);
    let observer = new IntersectionObserver(
      (entries) => cambiarClase(entries, observer),
      options
    );
    observer.observe(section);
  };

  observarSeccion("sobre-mi");

  const observarProyectos = () => {
    const section = document.querySelector("#proyectos");
    let observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinks.forEach((link) => {
              link.classList.add("white-text", "white-border");
            });
            socialLinks.forEach((link) => {
              link.style.color = "#82df8d";
            });
          } else {
            navLinks.forEach((link) => {
              link.classList.remove("white-text", "white-border");
            });
            socialLinks.forEach((link) => {
              link.style.color = "rgba(11, 11, 11, 0.7)";
            });
          }
        });
      },
      { threshold: [0.1, 0.5] }
    );

    observer.observe(section);
  };

  observarProyectos();
} else {
  btnMenu.addEventListener("click", () => {
    navbar.classList.add("open");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navbar.classList.remove("open");
    });
  });

  btnClose.addEventListener("click", () => {
    navbar.classList.remove("open");
  });
}

//////////////////////////////////////////////////

form.addEventListener("submit", function (event) {
  event.preventDefault();

  btn.textContent = "Enviando...";

  const serviceID = "default_service";
  const templateID = "template_vtkmpi8";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.textContent = "Enviar mensaje";
      form.reset();
      alert("Mensaje enviado exitosamente!");
    },
    (err) => {
      btn.textContent = "Enviar mensaje";
      alert(JSON.stringify(err));
    }
  );
});
