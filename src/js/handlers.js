// Функції, які передаються колбеками в addEventListners

import {
  fetchProductByCategory,
  fetchProductById,
  fetchProductByName,
  fetchProducts,
} from './products-api';
import { refs } from './refs';
import {
  categoryList,
  createMarkupProductsList,
  modalProductById,
  productsList,
  productsListByCategory,
} from './render-function';

export const handleClickOnCategory = async event => {
  const categoryBtn = event.target;
  const buttons = event.currentTarget.querySelectorAll('.categories__btn');
  buttons.forEach(btn => btn.classList.remove('categories__btn--active'));
  categoryBtn.classList.add('categories__btn--active');
  const categoryName = categoryBtn.textContent;

  if (!categoryBtn.classList.contains('categories__btn')) {
    return;
  } else if (categoryName === 'ALL') {
    productsList();
  }

  const categoryProducts = await fetchProductByCategory(categoryName);
  if (categoryProducts.length === 0) {
    refs.notFound.classList.add('not-found--visible');
  }
  productsListByCategory(categoryProducts);
};

export async function searchProduct(event) {
  event.preventDefault();
  const productName = event.target.elements.searchValue.value.trim();
  if (productName.length === 0) {
    alert("Input shouldn't be empty!");
  }
  const product = await fetchProductByName(productName);
  if (product.length === 0) {
    refs.categoriesList.innerHTML = '';
    refs.notFound.classList.add('not-found--visible');
    refs.searchForm.reset();
  }
  refs.productsList.innerHTML = '';
  refs.productsList.insertAdjacentHTML(
    'beforeend',
    createMarkupProductsList(product)
  );
}

export const resetForm = async () => {
  refs.searchForm.reset();
  const products = await fetchProducts();
  refs.productsList.innerHTML = '';
  refs.productsList.insertAdjacentHTML(
    'beforeend',
    createMarkupProductsList(products)
  );
};
