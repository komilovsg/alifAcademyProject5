export function getElements() {
  const catalogContainer = document.getElementById("catalogContainer");
  const menuIcon = document.getElementById("dialog");

  menuIcon.addEventListener("click", () => {
    if (catalogContainer.style.display === "none") {
      catalogContainer.style.display = "block";
    } else {
      catalogContainer.style.display = "none";
    }
  });

  const links = document.querySelectorAll(".link");

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const page = link.getAttribute("data-page");
      if (page) {
        catalogContainer.style.display = "none";
        loadPage(page);
      } else {
        catalogContainer.style.display = "none";
        alert("Страница не доступна");
      }
    });
  });
}
