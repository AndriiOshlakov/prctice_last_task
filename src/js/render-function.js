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

export function productsListByCategory(data) {
  refs.productsList.innerHTML = '';
  refs.productsList.insertAdjacentHTML(
    'beforeend',
    createMarkupProductsList(data)
  );
}

export function modalProductById({
  images,
  description,
  title,
  tags,
  returnPolicy,
  price,
  shippingInformation,
}) {
  return `<img class="modal-product__img" src="${images[0]}" alt="${description}" />
      <div class="modal-product__content">
        <p class="modal-product__title">${title}</p>
        <ul class="modal-product__tags">${tags}</ul>
        <p class="modal-product__description">${description}</p>
        <p class="modal-product__shipping-information">Shipping:${shippingInformation}</p>
        <p class="modal-product__return-policy">Return Policy:${returnPolicy}</p>
        <p class="modal-product__price">Price:${price} $</p>
        <button class="modal-product__buy-btn" type="button">Buy</button>
      </div>
`;
}
