//Логіка сторінки Home

import { refs } from './js/refs';

import { categoryList, productsList } from './js/render-function';
import { handleClickOnCategory, resetForm, searchProduct } from './js/handlers';

import { closeModal, handleClickOnProductCard } from './js/modal';
import { STORAGE_KEYS } from './js/constants';

categoryList();
productsList();
refs.categoriesList.addEventListener('click', handleClickOnCategory);
refs.productsList.addEventListener('click', handleClickOnProductCard);
refs.modalCloseBtn.addEventListener('click', closeModal);
refs.searchForm.addEventListener('submit', searchProduct);
refs.resetFormBtn.addEventListener('click', resetForm);

const cartListFromLocalStorage =
  JSON.parse(localStorage.getItem(STORAGE_KEYS.CARD_KEY)) || [];
refs.totalProductsInCart.textContent = cartListFromLocalStorage.length;

let wishListFromLocalStorage = JSON.parse(
  localStorage.getItem(STORAGE_KEYS.WISH_KEY)
);
refs.itemsWishValue.textContent = wishListFromLocalStorage.length;
