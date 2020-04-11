"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const buttonsContainer = document.querySelector(".buttons-wrap");
    const fridgeInfoContainer = document.querySelector(".card_size_m:nth-child(8) .card-description");
    const confirmPurchaseButton = document.querySelector(".buttons-wrap .button_yellow");
    const purchaseListContainer = document.querySelector(".purchase-list-wrap");
    confirmPurchaseButton.onclick = () => {
      fridgeInfoContainer.remove();
      buttonsContainer.style.display = "none";
      purchaseListContainer.style.display = "block";
    };
    document.getElementsByClassName("header-menu__switcher")[0].addEventListener("click", function () {
        document.getElementsByClassName("header-menu")[0].classList.toggle("header-menu_active")
    })
});
