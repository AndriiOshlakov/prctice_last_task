//Логіка сторінки Cart

import iziToast from 'izitoast';
import { STORAGE_KEYS } from './js/constants';
import { fetchProductById } from './js/products-api';
import { productListForCart } from './js/render-function';
import { refs } from './js/refs';
import { totalPriceInCart, valuesInCart } from './js/helpers';
import { closeModal, handleClickOnProductCard } from './js/modal';

refs.productsList.addEventListener('click', handleClickOnProductCard);
refs.modalCloseBtn.addEventListener('click', closeModal);
let cartListFromLocalStorage =
  JSON.parse(localStorage.getItem(STORAGE_KEYS.CARD_KEY)) || [];

refs.totalProductsInCart.textContent = cartListFromLocalStorage.length;
let list = cartListFromLocalStorage.map(id => fetchProductById(id));

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

// refs.totalProductsInCart.textContent = cartListFromLocalStorage.length;
// const cartListFromLocalStorageAfterDelete = JSON.parse(
//   localStorage.getItem(STORAGE_KEYS.CARD_KEY || [])
// );
// const listAfterDelete = cartListFromLocalStorageAfterDelete.map(id =>
//   fetchProductById(id)
// );
// Promise.all(listAfterDelete)
//   .then(products => {
//     valuesInCart();
//     totalPriceInCart(products);
//     productListForCart(products);
//   })
//   .catch(error => {
//     iziToast.error({
//       message: error.message,
//       position: 'topRight',
//     });
//   });
let wishListFromLocalStorage = JSON.parse(
  localStorage.getItem(STORAGE_KEYS.WISH_KEY)
);
refs.itemsWishValue.textContent = wishListFromLocalStorage.length;
