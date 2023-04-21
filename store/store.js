import { SHOP_LIST, TOTAL_PRICE } from "./stateKeys.js";
import { ADD_PRODUCT, REMOVE_PRODUCT } from "./actionTypes.js";

class CreateStore {
    constructor () {
        this.state = {
            [SHOP_LIST]: [],
            [TOTAL_PRICE]: 0,
        }
    }

    shoplistReducer(state = this.state, action) {
        const { payload } = action;

        switch(action.type) {
            case ADD_PRODUCT:
                state[SHOP_LIST] = [...state[SHOP_LIST], payload];

                state[TOTAL_PRICE] = state[SHOP_LIST]
                    .map(el => el.price)
                    .reduce((prev, current) => prev + current);

                break

            case REMOVE_PRODUCT:
                const elIndex = state[SHOP_LIST].indexOf(payload);
                state[SHOP_LIST] = state[SHOP_LIST].filter((el, index) => index !== elIndex)                    
                    
                if (state[SHOP_LIST].length > 0) {
                    state[TOTAL_PRICE] = state[SHOP_LIST]
                        .map(el => el.price)
                        .reduce((prev, current) => prev + current);
                } else {
                    state[TOTAL_PRICE] = 0;
                }

                break 
        }
     }

    dispatch(action) {
        this.shoplistReducer(this.state, action);
    }
}

export default CreateStore

