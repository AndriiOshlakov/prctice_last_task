//Логіка сторінки Home

import { refs } from './js/refs';

import { categoryList, productsList } from './js/render-function';
import { handleClickOnCategory, resetForm, searchProduct } from './js/handlers';

import { closeModal, handleClickOnProductCard } from './js/modal';

categoryList();
productsList();
refs.categoriesList.addEventListener('click', handleClickOnCategory);
refs.productsList.addEventListener('click', handleClickOnProductCard);
refs.modalCloseBtn.addEventListener('click', closeModal);
refs.searchForm.addEventListener('submit', searchProduct);
refs.resetFormBtn.addEventListener('click', resetForm);
