//Логіка сторінки Cart

import iziToast from 'izitoast';
import { STORAGE_KEYS } from './js/constants';
import { fetchProductById } from './js/products-api';
import { productListForCart } from './js/render-function';
import { refs } from './js/refs';
import { totalPriceInCart, valuesInCart } from './js/helpers';

const cartListFromLocalStorage = JSON.parse(
  localStorage.getItem(STORAGE_KEYS.CARD_KEY)
);
refs.totalProductsInCart.textContent = cartListFromLocalStorage.length;
const list = cartListFromLocalStorage.map(id => fetchProductById(id));

Promise.all(list)
  .then(products => {
    valuesInCart();
    totalPriceInCart(products);
    productListForCart(products);
  })
  .catch(error => {
    iziToast.error({
      message: error.message,
      position: 'topRight',
    });
  });
