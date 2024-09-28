const CR = document.querySelectorAll(
  ".CreditOption__mainOffersWrapper_content-CR"
);

export default function addContent() {
  CR.forEach((CRItem) => {
    const priceElement = CRItem.querySelector(
      ".CreditOption__mainOffersWrapper_content-CR--title"
    );

    if (priceElement) {
      const price = parseFloat(priceElement.textContent);

      if (!isNaN(price)) {
        const newContent = document.createElement("p");
        newContent.classList.add(
          "CreditOption__mainOffersWrapper_content-CR--title"
        );
        newContent.textContent = `/${price / 10} $`;
        CRItem.appendChild(newContent);
      }
    }
  });
}
