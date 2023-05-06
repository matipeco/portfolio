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
  threshold: [0.1, 0.8],
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
observarSeccion("proyectos");
