import { STORAGE_KEYS } from './js/constants';
import { refs } from './js/refs';

//Логіка сторінки Wishlist
let wishListFromLocalStorage = JSON.parse(
  localStorage.getItem(STORAGE_KEYS.WISH_KEY)
);
refs.itemsWishValue.textContent = wishListFromLocalStorage.length;
const cartListFromLocalStorage =
  JSON.parse(localStorage.getItem(STORAGE_KEYS.CARD_KEY)) || [];
refs.totalProductsInCart.textContent = cartListFromLocalStorage.length;
