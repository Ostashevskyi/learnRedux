import { shopcart } from "./shopcart.js";


export function render(event) {
    const totalPrgh = document.querySelector('.total');

    const state = shopcart.state;

    totalPrgh.innerHTML = `${state.totalPrice} UAH`;

    document.querySelector(`.count${event.value}`).innerHTML = `In your cart: ${state.count[event.value]}`
}