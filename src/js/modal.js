//Описана робота модалки - відкриття закриття і все що з модалкою повʼязано

import { STORAGE_KEYS } from './constants';
import { fetchProductById } from './products-api';
import { refs } from './refs';
import { modalProductById } from './render-function';
import { addToCart, removeFromCart } from './storage';

let onCartBtnClick = null;
let onWishBtnClick = null;
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
    if (!cartList.includes(id)) {
      cardListBtn.textContent = 'Remove from Cart';
      cartList.push(id);
      localStorage.setItem(STORAGE_KEYS.CARD_KEY, JSON.stringify(cartList));
      refs.itemsValue.textContent = cartList.length;
    } else {
      cardListBtn.textContent = 'Add to Cart';
      cartList = cartList.filter(currentId => currentId !== id);
      localStorage.setItem(STORAGE_KEYS.CARD_KEY, JSON.stringify(cartList));
      refs.itemsValue.textContent = cartList.length;
    }
  };
  // Додаємо слухача
  cardListBtn.addEventListener('click', onCartBtnClick);

  const wishListBtn = document.querySelector('.modal-product__btn--wishlist');
  let wishList = JSON.parse(localStorage.getItem(STORAGE_KEYS.WISH_KEY)) || [];

  wishListBtn.textContent = wishList.includes(id)
    ? 'Remove from Wishlist'
    : 'Add to Wishlist';

  onWishBtnClick = () => {
    if (!wishList.includes(id)) {
      wishListBtn.textContent = 'Remove from Wishlist';
      wishList.push(id);
      localStorage.setItem(STORAGE_KEYS.WISH_KEY, JSON.stringify(wishList));
      refs.itemsWishValue.textContent = wishList.length;
    } else {
      wishListBtn.textContent = 'Add to Wishlist';
      wishList = wishList.filter(currentId => currentId !== id);
      localStorage.setItem(STORAGE_KEYS.WISH_KEY, JSON.stringify(wishList));
      refs.itemsWishValue.textContent = wishList.length;
    }
  };
  wishListBtn.addEventListener('click', onWishBtnClick);
};
export const closeModal = () => {
  refs.modal.classList.remove('modal--is-open');
  const cardListBtn = document.querySelector('.modal-product__btn--cart');
  if (cardListBtn && onCartBtnClick) {
    cardListBtn.removeEventListener('click', onCartBtnClick);
    onCartBtnClick = null; // обнуляємо, щоб не тримати зайве
  }
  const wishListBtn = document.querySelector('.modal-product__btn--wishlist');
  if (wishListBtn && onWishBtnClick) {
    wishListBtn.removeEventListener('click', onWishBtnClick);
    onWishBtnClick = null;
  }
};
