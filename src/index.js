const loadPartial = (elementId, partialFile) => {
  fetch(partialFile)
    .then((response) => response.text())
    .then((data) => (document.getElementById(elementId).innerHTML = data))
    .catch((error) => console.error("Ошибка загрузки partial:", error));
};

loadPartial("navbar", "../src/shared/modules/navbar/ui.html");
loadPartial("footer", "../src/shared/modules/footer/ui.html");
