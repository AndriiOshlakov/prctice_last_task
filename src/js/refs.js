//Обʼєкт з посиланнями на ДОМ елементи

export const refs = {
  // Lists

  categoriesList: document.querySelector('.categories'),
  productsList: document.querySelector('.products'),
  cartSummaryList: document.querySelector('.cart-summary__list'),

  //  div.not-found
  notFound: document.querySelector('.not-found'),

  // Form
  searchForm: document.querySelector('.search-form'),
  resetFormBtn: document.querySelector('.search-form__btn-clear'),

  // Nav
  totalProductsInCart: document.querySelector('.nav__count'),

  // Modal
  modal: document.querySelector('.modal'),
  modalProduct: document.querySelector('.modal-product'),
  modalCloseBtn: document.querySelector('.modal__close-btn'),
  wishListBtn: document.querySelector('.modal-product__btn--wishlist'),

  // Cart

  itemsValue: document.querySelector('[data-count]'),
  totalValue: document.querySelector('[data-price]'),
};
