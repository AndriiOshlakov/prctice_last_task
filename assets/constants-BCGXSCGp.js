import{a as s,i as c}from"./vendor-CJ_tX8LA.js";const e={categoriesList:document.querySelector(".categories"),productsList:document.querySelector(".products"),cartSummaryList:document.querySelector(".cart-summary__list"),notFound:document.querySelector(".not-found"),searchForm:document.querySelector(".search-form"),resetFormBtn:document.querySelector(".search-form__btn-clear"),totalProductsInCart:document.querySelector(".nav__count"),modal:document.querySelector(".modal"),modalProduct:document.querySelector(".modal-product"),modalCloseBtn:document.querySelector(".modal__close-btn"),wishListBtn:document.querySelector(".modal-product__btn--wishlist"),itemsValue:document.querySelector("[data-count]"),totalValue:document.querySelector("[data-price]")};s.defaults.baseURL="https://dummyjson.com";async function l(){try{const{data:t}=await s("/products/categories");return t}catch(t){c.error({message:t.message,position:"topRight"})}}async function m(t=1){const o=`/products?limit=12&skip=${(t-1)*12}`;try{const{data:r}=await s(o);return r.products}catch(r){c.error({message:r.message,position:"topRight"})}}async function g(t,o=1){try{const{data:r}=await s(`/products/category/${t}?limit=12&skip=${(o-1)*12}`);return r.products}catch(r){c.error({message:r.message,position:"topRight"})}}async function f(t){try{const{data:o}=await s(`/products/${t}`);return o}catch(o){throw c.error({message:o.message,position:"topRight"}),o}}async function h(t){try{const{data:o}=await s(`/products/search?q=${t}&limit=12`);return o.products}catch(o){c.error({message:o.message,position:"topRight"})}}function _(t){return t.map(({name:o})=>`<li class="categories__item">
   <button class="categories__btn" type="button">${o}</button></li>`).join("")}const L=async()=>{const t=await l();t.unshift({name:"ALL"}),e.categoriesList.insertAdjacentHTML("beforeend",_(t))};function d(t){return t.map(({id:o,images:r,description:a,title:n,brand:u,category:i,price:p})=>`<li class="products__item" data-id="${o}">
    <img class="products__image" src="${r[0]}" alt="${a}"/>
    <p class="products__title">${n}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand:</span>${u}</p>
    <p class="products__category">Category:${i} </p>
    <p class="products__price">Price:${p} $</p>
 </li>
`).join("")}const $=async()=>{const t=await m();e.productsList.insertAdjacentHTML("beforeend",d(t))};function b(t){e.productsList.insertAdjacentHTML("beforeend",d(t))}function S(t){e.productsList.innerHTML="",e.productsList.insertAdjacentHTML("beforeend",d(t))}function q({images:t,description:o,title:r,tags:a,returnPolicy:n,price:u,shippingInformation:i}){return`<img class="modal-product__img" src="${t[0]}" alt="${o}" />
      <div class="modal-product__content">
        <p class="modal-product__title">${r}</p>
        <ul class="modal-product__tags">${a}</ul>
        <p class="modal-product__description">${o}</p>
        <p class="modal-product__shipping-information">Shipping:${i}</p>
        <p class="modal-product__return-policy">Return Policy:${n}</p>
        <p class="modal-product__price">Price:${u} $</p>
        <button class="modal-product__buy-btn" type="button">Buy</button>
      </div>
`}const w={CARD_KEY:"cart",WISH_KEY:"wishlist"};export{w as S,S as a,h as b,d as c,m as d,f as e,g as f,L as g,b as h,q as m,$ as p,e as r};
//# sourceMappingURL=constants-BCGXSCGp.js.map
