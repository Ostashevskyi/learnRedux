import CreateStore from "./store/store.js"
import product_cards from "./UI.js";
import { render } from "./render.js";
import { products } from "./products.js";
import { addProduct, removeProduct } from "./store/actions.js";

export const shopcart = new CreateStore();

product_cards();

Array.from(document.querySelectorAll('.plus')).map(el => el.addEventListener('click', (event) => {
    addProduct(products[event.target.value])
    render(event.target)
}))

Array.from(document.querySelectorAll('.minus')).map(el => el.addEventListener('click', (event) => {
    removeProduct(products[event.target.value])
    render(event.target)
}))
