import { getDataFromState } from "./store/selectors.js";
import { SHOP_LIST, TOTAL_PRICE } from "./store/stateKeys.js";


export function render(event) {
    const totalPrgh = document.querySelector('.total');

    const state = getDataFromState(TOTAL_PRICE, SHOP_LIST);

    totalPrgh.innerHTML = `${state.totalPrice} UAH`;

    document.querySelector(`.count${event.value}`).innerHTML = `In your cart: ${state[SHOP_LIST].filter(el => el.name === event.value).length}`
}