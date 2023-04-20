import { ADD_PRODUCT } from "./actionTypes.js";
import { shopcart } from "../shopcart.js";

export const addProduct = (product) => {
    shopcart.dispatch({
            type: ADD_PRODUCT,
            payload: typeof product === 'string' ? JSON.parse(product) : product,
    });
}