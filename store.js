class CreateStore {
    constructor () {
        this.state = {
            shopList: [],
            totalPrice: 0,
            count: {}
        }
    }

    shoplistReducer(state = this.state, action) {
        const payload = action.payload;

        switch(action.type) {
            case "ADD_PRODUCT":
                state.shopList.push(payload);

                state.totalPrice += payload.price;

                state.count[payload.name] = this.state.shopList.filter(el => payload.name === el.name).length;

                break

            case "REMOVE_PRODUCT":
                if (state.shopList.includes(payload)) {

                    state.totalPrice -= payload.price;
    
                    state.shopList.splice(state.shopList.indexOf(payload), 1);                      
                    
                    state.count[payload.name] -= 1;
                } 

                break 
        }

    }

    dispatch(action) {
        this.shoplistReducer(this.state, action);
    }
}

export default CreateStore

