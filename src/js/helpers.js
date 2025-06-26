//Допоміжні функції

import { STORAGE_KEYS } from './constants';
import { fetchProductById } from './products-api';
import { refs } from './refs';

const cartListFromLocalStorage = JSON.parse(
  localStorage.getItem(STORAGE_KEYS.CARD_KEY)
);

export function totalPriceInCart(arr) {
  const totalPrice = arr.reduce((acc, { price }) => {
    return acc + price;
  }, 0);

  refs.totalValue.textContent = totalPrice;
}
export function valuesInCart() {
  refs.itemsValue.textContent = cartListFromLocalStorage.length;
}
