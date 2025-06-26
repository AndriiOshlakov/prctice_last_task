//Робота з loacalStorage

import { STORAGE_KEYS } from './constants';
import { refs } from './refs';

let wishList = [];

export const addToCart = (id, btn) => {
  let cartList = JSON.parse(localStorage.getItem(STORAGE_KEYS.CARD_KEY)) || [];

  btn.textContent = 'Remove from Cart';
  if (!cartList.includes(id)) {
    cartList.push(id);
  }

  localStorage.setItem(STORAGE_KEYS.CARD_KEY, JSON.stringify(cartList));
  refs.totalProductsInCart.textContent = cartList.length;
};

export const removeFromCart = (id, btn) => {
  let cartList = JSON.parse(localStorage.getItem(STORAGE_KEYS.CARD_KEY)) || [];

  btn.textContent = 'Add to Cart';
  cartList = cartList.filter(currentId => currentId !== id);

  localStorage.setItem(STORAGE_KEYS.CARD_KEY, JSON.stringify(cartList));
  refs.totalProductsInCart.textContent = cartList.length;
};
