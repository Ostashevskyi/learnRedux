import CreateStore from "./store.js"
import { addAction, removeAction } from "./actions/index.js"
import product_cards from "./UI.js";

product_cards()

const shopcart = new CreateStore();

Array.from(document.querySelectorAll('.plus')).map(el => el.addEventListener('click', (event) => {
    shopcart.dispatch(addAction(), event.target);
}))

Array.from(document.querySelectorAll('.minus')).map(el => el.addEventListener('click', (event) => {
    shopcart.dispatch(removeAction(), event.target);
}))
