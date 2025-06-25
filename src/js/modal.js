//Описана робота модалки - відкриття закриття і все що з модалкою повʼязано

import { STORAGE_KEYS } from './constants';
import { fetchProductById } from './products-api';
import { refs } from './refs';
import { modalProductById } from './render-function';
import { addToCart, removeFromCart } from './storage';

export const handleClickOnProductCard = async event => {
  const productCard = event.target;
  if (!productCard.closest('.products__item')) {
    return;
  }
  const id = productCard.closest('.products__item').dataset.id;
  const productById = await fetchProductById(id);
  const productModalWindow = modalProductById(productById);

  refs.modalProduct.innerHTML = productModalWindow;
  refs.modal.classList.add('modal--is-open');

  let cartList = JSON.parse(localStorage.getItem(STORAGE_KEYS.CARD_KEY)) || [];
  if (cartList.includes(id)) {
    // refs.totalProductsInCart.textContent = cartList.length;
    refs.cardListBtn.textContent = 'Remove from Cart';
    refs.cardListBtn.addEventListener('click', () => removeFromCart(id));
  } else {
    // refs.totalProductsInCart.textContent = cartList.length;
    refs.cardListBtn.textContent = 'Add to Cart';
    refs.cardListBtn.addEventListener('click', () => {
      addToCart(id);
    });
  }
};
export const closeModal = () => {
  refs.modal.classList.remove('modal--is-open');
};
