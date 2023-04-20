import { products } from "./products.js";



function product_cards() {
    const productsContainer = document.querySelector('.products');
    const productsArr = Object.values(products);
    
    productsArr.forEach(el => {
        productsContainer.innerHTML += `
            <div class="${el.name} product">
                <h2>${el.name}</h2>
                <div class="product__info">
                    <p>Price: ${el.price} UAH</p>
                    <span class="count${el.name}">In your cart: 0</span>
                </div>
                <button value="${el.name}" class="plus">Add</button>
                <button value="${el.name}" class="minus">Remove</button>
            </div>
        `
    })
}

export default product_cards