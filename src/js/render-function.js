//Функцію для створення, рендеру або видалення розмітки

import { refs } from './refs';
import {
  fetchCategories,
  fetchProductByCategory,
  fetchProducts,
} from './products-api';

export function createMarkupCategoriesList(arr) {
  return arr
    .map(
      ({ name }) => `<li class="categories__item">
   <button class="categories__btn" type="button">${name}</button></li>`
    )
    .join('');
}

export const categoryList = async () => {
  const data = await fetchCategories();
  data.unshift({ name: 'ALL' });
  refs.categoriesList.insertAdjacentHTML(
    'beforeend',
    createMarkupCategoriesList(data)
  );
};

export function createMarkupProductsList(arr) {
  return arr
    .map(
      ({
        id,
        images,
        description,
        title,
        brand,
        category,
        price,
      }) => `<li class="products__item" data-id="${id}">
    <img class="products__image" src="${images[0]}" alt="${description}"/>
    <p class="products__title">${title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand:</span>${brand}</p>
    <p class="products__category">Category:${category} </p>
    <p class="products__price">Price:${price} $</p>
 </li>
`
    )
    .join('');
}

export const productsList = async () => {
  const data = await fetchProducts();
  refs.productsList.insertAdjacentHTML(
    'beforeend',
    createMarkupProductsList(data)
  );
};

export const productsListByCategory = async () => {
  const data = await fetchProductByCategory();
  refs.productsList.insertAdjacentHTML(
    'beforeend',
    createMarkupProductsList(data)
  );
};
