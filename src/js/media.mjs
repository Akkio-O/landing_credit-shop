import addContent from "./content.mjs";

const contentButton = "Try Now";
const bonusOfferWrapper = document.querySelector(
  ".CreditOption__bonusOfferWrapper"
);
let backupBonusOffer = null;

export default function updateClassBasedOnWidth() {
  const carouselInner = document.querySelector(
    ".CreditOption__mainOffersWrapper"
  );
  const carouselItemAll = document.querySelectorAll(
    ".CreditOption__mainOffersWrapper_content"
  );

  if (window.innerWidth < 768) {
    if (!backupBonusOffer) {
      addContent();
      backupBonusOffer = bonusOfferWrapper.cloneNode(true);

      carouselInner.classList.add("carousel-inner");
      carouselItemAll.forEach((item) => {
        item.classList.add("carousel-item");
      });

      const button = document.createElement("button");
      button.innerHTML = contentButton;
      button.className = bonusOfferWrapper.className;
      button.type = "button";
      button.classList.add("CreditOption___button");
      bonusOfferWrapper.replaceWith(button);
    }
  } else {
    const button = document.querySelector(
      `button[class="${bonusOfferWrapper.className}"]`
    );

    if (button) {
      if (backupBonusOffer) {
        button.replaceWith(backupBonusOffer);
        backupBonusOffer = null;
      }
    }

    carouselInner.classList.remove("carousel-inner");
    carouselItemAll.forEach((item) => {
      item.classList.remove("carousel-item");
    });
  }
}
