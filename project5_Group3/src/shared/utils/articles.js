import { information } from "./date.js";

export function articlesInfo(title, descCategoryShow) {
  const containerCategory = document.createElement("div");

  const topContainerCategory = document.createElement("div");
  const bottomContainerCategory = document.createElement("div");

  const titleCategory = document.createElement("h1");
  const showAllCategory = document.createElement("div");
  const descCategory = document.createElement("p");
  const arrowLeftCategory = document.createElement("img");

  containerCategory.classList.add("containerCategory");
  topContainerCategory.classList.add("topContainerCategory");
  bottomContainerCategory.classList.add("bottomContainerCategory");
  descCategory.classList.add("descCategory");
  titleCategory.classList.add("titleCategory");
  arrowLeftCategory.classList.add("arrowLeftCategory");
  showAllCategory.classList.add("showAllCategory");

  titleCategory.textContent = title;
  descCategory.textContent = descCategoryShow;
  arrowLeftCategory.src = "../src/shared/icons/chevron-right.png";

  information.forEach((elem) => {
    const cardArticle = document.createElement("div");

    const imgArticle = document.createElement("img");
    const contentofArticle = document.createElement("div");

    const timeArticle = document.createElement("p");
    const titleArticle = document.createElement("h2");
    const descriptionArticle = document.createElement("p");
    const buttonArticle = document.createElement("button");

    imgArticle.src = elem.img;
    timeArticle.textContent = elem.time;
    titleArticle.textContent = elem.title;
    descriptionArticle.textContent = elem.description;
    buttonArticle.textContent = "Подробнее";

    cardArticle.classList.add("cardArticle");
    contentofArticle.classList.add("contentofArticle");
    buttonArticle.classList.add("buttonArticle")

    contentofArticle.append(
      timeArticle,
      titleArticle,
      descriptionArticle,
      buttonArticle
    );
    cardArticle.append(imgArticle, contentofArticle);
    bottomContainerCategory.append(cardArticle);
  });

  showAllCategory.append(descCategory, arrowLeftCategory);
  topContainerCategory.append(titleCategory, showAllCategory);
  containerCategory.append(topContainerCategory, bottomContainerCategory);

  return containerCategory;
}
