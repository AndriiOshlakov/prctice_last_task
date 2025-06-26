// Функції для роботи з бекендом

import axios from 'axios';
import iziToast from 'izitoast';

axios.defaults.baseURL = 'https://dummyjson.com';

export async function fetchCategories() {
  try {
    const { data } = await axios('/products/categories');

    return data;
  } catch (error) {
    iziToast.error({ message: error.message, position: 'topRight' });
  }
}

export async function fetchProducts(currentPage = 1) {
  const url = `/products?limit=12&skip=${(currentPage - 1) * 12}`;
  try {
    const { data } = await axios(url);

    return data.products;
  } catch (error) {
    iziToast.error({ message: error.message, position: 'topRight' });
  }
}

export async function fetchProductByCategory(category, currentPage = 1) {
  try {
    const { data } = await axios(
      `/products/category/${category}?limit=12&skip=${(currentPage - 1) * 12}`
    );
    return data.products;
  } catch (error) {
    iziToast.error({ message: error.message, position: 'topRight' });
  }
}

export async function fetchProductById(id) {
  try {
    const { data } = await axios(`/products/${id}`);
    return data;
  } catch (error) {
    iziToast.error({ message: error.message, position: 'topRight' });
    throw error;
  }
}

export async function fetchProductByName(name) {
  try {
    const { data } = await axios(`/products/search?q=${name}&limit=12`);
    return data.products;
  } catch (error) {
    iziToast.error({ message: error.message, position: 'topRight' });
  }
}
