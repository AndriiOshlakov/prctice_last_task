//Робота з loacalStorage

import { STORAGE_KEYS } from './constants';
import { refs } from './refs';

let wishList = [];

export const addToCart = id => {
  let cartList = JSON.parse(localStorage.getItem(STORAGE_KEYS.CARD_KEY)) || [];

  if (!cartList.includes(id)) {
    refs.cardListBtn.textContent = 'Remove from Cart';
    cartList.push(id);
  }
  //   refs.totalProductsInCart += 1;
  localStorage.setItem(STORAGE_KEYS.CARD_KEY, JSON.stringify(cartList));
};

export const removeFromCart = id => {
  let cartList = JSON.parse(localStorage.getItem(STORAGE_KEYS.CARD_KEY)) || [];

  if (cartList.includes(id)) {
    refs.cardListBtn.textContent = 'Add to Cart';
    cartList = cartList.slice(1, [id]);
    // refs.totalProductsInCart -= 1;
    localStorage.setItem(STORAGE_KEYS.CARD_KEY, JSON.stringify(cartList));
  }
};
