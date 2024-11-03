import { tabs } from "./pages/home/index.js";
import { getElements } from "./shared/modules/navbar/index.js";
import { articlesInfo } from "./shared/utils/articles.js";
import { catalog } from "./shared/utils/category.js";

const loadPartial = async (elementId, partialFile) => {
  try {
    const response = await fetch(partialFile);
    const data = await response.text();
    document.getElementById(elementId).innerHTML = data;
  } catch (error) {
    console.error("Ошибка загрузки partial:", error);
  }
};

loadPartial("navbar", "../src/shared/modules/navbar/ui.html");
loadPartial("footer", "../src/shared/modules/footer/ui.html");

const addComponent = (elementId, content) => {
  const element = document.getElementById(elementId);
  if (element) {
    const newComponent = document.createElement("div");
    newComponent.innerHTML = content;
    element.append(newComponent);
  }
};

const initializeComponents = () => {
  const stocksComponent = catalog("Акции", "Все акции", "Stocks");
  const newItemComponent = catalog("Новинки", "Все новинки", "NewItems");
  const boughtBeforeComponent = catalog(
    "Покупали раньше",
    "Все покупки",
    "BoughtBefore"
  );

  const articlesComponent = articlesInfo("Статьи", "Все статьи");

  addComponent("articlesContainer", articlesComponent.outerHTML);
  addComponent("boughtBeforeContainer", boughtBeforeComponent.outerHTML);
  addComponent("newItemContainer", newItemComponent.outerHTML);
  addComponent("stocksContainer", stocksComponent.outerHTML);
};

const loadPage = async (page) => {
  let pageFile;

  if (page.includes("/")) {
    const parts = page.split("/");
    if (parts.length === 2) {
      pageFile = `../src/pages/${parts[0]}/${parts[1]}/${parts[1]}.html`;
    } else if (parts.length === 3) {
      pageFile = `../src/pages/${parts[0]}/${parts[1]}/${parts[2]}.html`;
    } else {
      console.error("Неправильный формат пути страницы");
      return;
    }
  } else {
    pageFile = `../src/pages/${page}/${page}.html`;
  }

  await loadPartial("pages", pageFile);
  initializeComponents();
  tabs();
  getElements();
};

document.addEventListener("DOMContentLoaded", () => {
  loadPage("home");

  document.getElementById("navbar").addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      event.preventDefault();
      const page = event.target.getAttribute("data-page");
      loadPage(page);
    }
  });

  document.addEventListener("click", (event) => {
    const categoryDiv = event.target.closest(".contentCategory");
    if (categoryDiv) {
      event.preventDefault();
      const page = categoryDiv.getAttribute("data-page");
      loadPage(page);
    }
  });

  document.addEventListener("click", (event) => {
    if (
      event.target.tagName === "A" &&
      event.target.hasAttribute("data-page")
    ) {
      event.preventDefault();
      const page = event.target.getAttribute("data-page");
      loadPage(page);
    }
  });
});
