import { ADD_PRODUCT, REMOVE_PRODUCT } from "./actionTypes.js";
import { shopcart } from "../shopcart.js";

export const addProduct = (product) => {
    shopcart.dispatch({
            type: ADD_PRODUCT,
            payload: product,
    });
}

export const removeProduct = (product) => {
    shopcart.dispatch({
        type: REMOVE_PRODUCT,
        payload: product
    })
}