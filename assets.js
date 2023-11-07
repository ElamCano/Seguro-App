/* Select de Planes */
document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("select-plan");
  select.addEventListener("change", function () {
    const output = document.getElementById("select-output");
    output.innerHTML = "";
    const value = `Precio: $${select.value}`;

    const result = document.createTextNode(value);
    output.appendChild(result);
  });
});
/* Burger de navegacion */
document.addEventListener("DOMContentLoaded", function () {
  const menuBurger = document.getElementById("menu-burger");
  const menuNavegacion = document.getElementById("menu-nav");

  menuBurger.addEventListener("click", function () {
    if (menuNavegacion.style.display === "none") {
      menuNavegacion.style.display = "flex";
    } else {
      menuNavegacion.style.display = "none";
    }
  });
});
