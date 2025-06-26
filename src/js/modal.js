//Описана робота модалки - відкриття закриття і все що з модалкою повʼязано

import { STORAGE_KEYS } from './constants';
import { fetchProductById } from './products-api';
import { refs } from './refs';
import { modalProductById } from './render-function';
import { addToCart, removeFromCart } from './storage';

let onCartBtnClick = null;
export const handleClickOnProductCard = async event => {
  const productCard = event.target;
  if (!productCard.closest('.products__item')) {
    return;
  }
  const id = +productCard.closest('.products__item').dataset.id;
  const productById = await fetchProductById(id);
  const productModalWindow = modalProductById(productById);

  refs.modalProduct.innerHTML = productModalWindow;
  refs.modal.classList.add('modal--is-open');

  let cartList = JSON.parse(localStorage.getItem(STORAGE_KEYS.CARD_KEY)) || [];
  const cardListBtn = document.querySelector('.modal-product__btn--cart');
  // Встановлюємо початковий текст кнопки
  cardListBtn.textContent = cartList.includes(id)
    ? 'Remove from Cart'
    : 'Add to Cart';

  // Створюємо функцію обробника та зберігаємо її для подальшого видалення
  onCartBtnClick = () => {
    let cartList =
      JSON.parse(localStorage.getItem(STORAGE_KEYS.CARD_KEY)) || [];
    if (cartList.includes(id)) {
      removeFromCart(id, cardListBtn);
    } else {
      addToCart(id, cardListBtn);
    }
  };

  // Додаємо слухача
  cardListBtn.addEventListener('click', onCartBtnClick);
};
export const closeModal = () => {
  refs.modal.classList.remove('modal--is-open');
  const cardListBtn = document.querySelector('.modal-product__btn--cart');
  if (cardListBtn && onCartBtnClick) {
    cardListBtn.removeEventListener('click', onCartBtnClick);
    onCartBtnClick = null; // обнуляємо, щоб не тримати зайве
  }
};
