import CreateStore from "./store.js"
import product_cards from "./UI.js";
import { render } from "./render.js";
import { products } from "./products.js";

product_cards();

export const shopcart = new CreateStore();

Array.from(document.querySelectorAll('.plus')).map(el => el.addEventListener('click', (event) => {
    shopcart.dispatch({
        type: "ADD_PRODUCT",
        payload: products[event.target.value],
    });
    render(event.target)
}))

Array.from(document.querySelectorAll('.minus')).map(el => el.addEventListener('click', (event) => {
    shopcart.dispatch({
        type: "REMOVE_PRODUCT",
        payload: products[event.target.value]
    });
    render(event.target)
}))
