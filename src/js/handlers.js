// Функції, які передаються колбеками в addEventListners

import { fetchProductByCategory } from './products-api';
import {
  categoryList,
  createMarkupProductsList,
  productsListByCategory,
} from './render-function';

export const handleClickOnCategory = async event => {
  const categoryBtn = event.target;
  console.log(categoryBtn);

  const categoryName = categoryBtn.textContent;
  console.log(categoryName);
  if (!categoryBtn.classList.contains('products__btn')) {
    return;
  }
  console.log(categoryName);
  const categoryProducts = await fetchProductByCategory(categoryName);
  console.log(categoryProducts);

  productsListByCategory(categoryProducts);
};
