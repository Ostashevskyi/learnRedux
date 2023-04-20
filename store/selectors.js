import { shopcart } from "../shopcart.js"

export const getDataFromState = (...params) => {
    const obj = {};

    params.forEach(el => {
        if (shopcart.state.hasOwnProperty(el)) {
            obj[el] = shopcart.state[el]
        } else {
            console.log(`state is not contain ${el}`)
        }
    })

    return obj
}