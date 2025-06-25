//Логіка сторінки Home

import { refs } from './js/refs';
import {
  fetchCategories,
  fetchProductByCategory,
  fetchProductById,
  fetchProductByName,
  fetchProducts,
} from './js/products-api';
import {
  categoryList,
  productsList,
  productsListByCategory,
} from './js/render-function';
import { handleClickOnCategory } from './js/handlers';

categoryList();
productsList();
refs.categoriesList.addEventListener('click', handleClickOnCategory);
