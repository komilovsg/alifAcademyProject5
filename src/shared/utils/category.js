import { date } from "./date.js";

export function catalog(title, descCategoryShow, categoryFilter) {
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

  const filteredItems =
    categoryFilter === "BoughtBefore"
      ? date
          .filter((elem) => elem.category === categoryFilter)
          .concat(
            date.filter((elem) => elem.category === "NewItems").slice(0, 3)
          )
      : date.filter((elem) => elem.category === categoryFilter);

  filteredItems.forEach((elem) => {
    const cardCategory = document.createElement("div");

    const divIconsCategory = document.createElement("div");
    const iconsCategory = document.createElement("img");
    const mainImg = document.createElement("img");

    const cardContentCategory = document.createElement("div");
    const cardPriceContentItem = document.createElement("div");

    const rightPriceContentCategory = document.createElement("div");
    const leftPriceContentCategory = document.createElement("div");
    const titleElem = document.createElement("h2");
    const starsCategory = document.createElement("img");
    const buttonIntoShopingCarts = document.createElement("button");

    titleElem.textContent = elem.title;
    iconsCategory.src = elem.icons;
    mainImg.src = elem.img;
    starsCategory.src = elem.stars;
    buttonIntoShopingCarts.textContent = "В корзину";

    cardCategory.classList.add("cardCategory");
    rightPriceContentCategory.classList.add("rightPriceContentCategory");
    leftPriceContentCategory.classList.add("leftPriceContentCategory");
    divIconsCategory.classList.add("divIconsCategory");
    mainImg.classList.add("mainImg");
    cardPriceContentItem.classList.add("cardPriceContentItem");
    cardContentCategory.classList.add("cardContentCategory");
    titleElem.classList.add("titleElem");
    starsCategory.classList.add("starsCategory");
    buttonIntoShopingCarts.classList.add("buttonIntoShopingCarts");

    if (elem.category === "Stocks") {
      const fiftyProcent = document.createElement("div");
      const withCardsPrice = document.createElement("h2");
      const withCardsPriceItem = document.createElement("p");
      const simplePrice = document.createElement("h2");
      const simplePriceItem = document.createElement("p");

      fiftyProcent.textContent = "-50%";
      withCardsPrice.textContent = `${elem.priceWithCart} ₽`;
      withCardsPriceItem.textContent = "С картой";
      simplePrice.textContent = `${elem.price} ₽`;
      simplePriceItem.textContent = "Обычная";

      fiftyProcent.classList.add("fiftyProcent");
      withCardsPrice.classList.add("withCardsPrice");
      withCardsPriceItem.classList.add("withCardsPriceItem");
      simplePrice.classList.add("simplePrice");
      simplePriceItem.classList.add("simplePriceItem");

      rightPriceContentCategory.append(withCardsPrice, withCardsPriceItem);
      leftPriceContentCategory.append(simplePrice, simplePriceItem);
      cardPriceContentItem.append(
        rightPriceContentCategory,
        leftPriceContentCategory
      );
      cardCategory.append(fiftyProcent);
    } else {
      const simplePrice = document.createElement("h2");
      simplePrice.textContent = `${elem.price} ₽`;
      simplePrice.classList.add("simplePriceForOthers");
      cardPriceContentItem.append(simplePrice);
    }

    cardContentCategory.append(
      cardPriceContentItem,
      titleElem,
      starsCategory,
      buttonIntoShopingCarts
    );
    divIconsCategory.append(iconsCategory);
    cardCategory.append(divIconsCategory, mainImg, cardContentCategory);
    bottomContainerCategory.append(cardCategory);
  });

  showAllCategory.append(descCategory, arrowLeftCategory);
  topContainerCategory.append(titleCategory, showAllCategory);
  containerCategory.append(topContainerCategory, bottomContainerCategory);

  return containerCategory;
}
