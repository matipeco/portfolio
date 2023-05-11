//Intersection observer
//El objeto options sirve para que cuando es pasado al IntersectionObserver, le deje controlar en que momento es llamada la callback.
//root: va a ser el elemento que es usado como viewport.
//rootMargin, margen alrededor del elemento seleccionado en el root, por defecto es todo 0
//El threshold, indica a que porcentaje de visibilidad del elemento target, la funcion del observer deberia ser ejecutada.

const navLinks = document.querySelectorAll(".navbar__list-item a");
const socialLinks = document.querySelectorAll(".social__list-item a");

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
// observarSeccion("habilidades");
// observarSeccion("proyectos");
// observarSeccion("contacto");

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

// const navLinks = document.querySelectorAll(".navbar__list-item a");
// const socialLinks = document.querySelectorAll(".social__list-item a");

// const cambiarClase = (entries, observer) => {
//   console.log(entries);
//   entries.forEach((entry) => {
//     if (entry.isIntersecting && entry.intersectionRatio >= 0.8) {
//       navLinks.forEach((link) => {
//         link.classList.add("white-text", "white-border");
//       });
//       socialLinks.forEach((link) => {
//         link.style.color = "#82df8d";
//       });
//       if (entry.target.id === "contacto") {
//         // seccion de contacto
//         navLinks.forEach((link) => {
//           link.classList.remove("white-text");
//           link.classList.add("black-text");
//         });
//         socialLinks.forEach((link) => {
//           link.style.color = "black";
//         });
//       }
//     } else if (!entry.isIntersecting && entry.intersectionRatio <= 0.8) {
//       navLinks.forEach((link) => {
//         link.classList.remove("white-text", "white-border");
//       });
//       socialLinks.forEach((link) => {
//         link.style.color = "rgba(11, 11, 11, 0.7)";
//       });
//       if (entry.target.id === "contacto") {
//         // seccion de contacto
//         navLinks.forEach((link) => {
//           link.classList.add("white-text");
//           link.classList.remove("black-text");
//         });
//         socialLinks.forEach((link) => {
//           link.style.color = "rgba(255, 255, 255, 0.7)";
//         });
//       }
//       if (entry.target.id === "header") {
//         // seccion de contacto
//         navLinks.forEach((link) => {
//           link.classList.add("white-text");
//           link.classList.remove("black-text");
//         });
//         socialLinks.forEach((link) => {
//           link.style.color = "rgba(255, 255, 255, 0.7)";
//         });
//       }
//       if (entry.target.id === "habilidades") {
//         // seccion de contacto
//         navLinks.forEach((link) => {
//           link.classList.add("white-text");
//           link.classList.remove("black-text");
//         });
//         socialLinks.forEach((link) => {
//           link.style.color = "rgba(255, 255, 255, 0.7)";
//         });
//       }
//     }
//   });
// };

// const options = {
//   threshold: [0.1, 0.8],
// };

// const observarSeccion = (id) => {
//   const section = document.querySelector(`#${id}`);
//   let observer = new IntersectionObserver(
//     (entries) => cambiarClase(entries, observer),
//     options
//   );
//   observer.observe(section);
// };

// observarSeccion("sobre-mi");
// observarSeccion("proyectos");
// observarSeccion("contacto");

const btn = document.getElementById("form-span");

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

const btnMenu = document.getElementById("btn-menu");
const navbar = document.getElementById("navbar");
const btnClose = document.getElementById("btn-menu-close");

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
