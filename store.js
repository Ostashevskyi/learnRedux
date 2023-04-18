import { products } from "./products.js";

class CreateStore {
    constructor () {
        this.state = {
            shopList: [],
            totalPrice: 0,
            count: {}
        }
        this.$shopListUl = document.querySelector('.shoplist');
        this.$totalPrgh = document.querySelector('.total');
    }

    shoplistReducer(action, event) {
        switch(action.type) {
            case "ADD_PRODUCT":
                products.forEach(el => {
                    if (el.name === event.value) {
                        this.state.shopList.push(el);

                        this.state.totalPrice += el.price;

                        this.state.count[el.name] = this.state.shopList.filter(product => el.name === product.name).length;
                    }
                })
                this.render(event);
                break
            
            case "REMOVE_PRODUCT":
                const shopList = this.state.shopList;

                shopList.forEach((el, index) => {
                    if (el.name === event.value) {
                        this.state.totalPrice -= el.price;
                        
                        this.state.shopList.splice(index, 1);
                        
                        this.state.count[el.name] -= 1;
                    }
                })
                this.render(event);
                break 
        }
    }

    dispatch(action, event) {
        this.shoplistReducer(action, event);
    }

    render(event) {
        const state = this.state;

        this.$totalPrgh.innerHTML = `${state.totalPrice} UAH`;

        document.querySelector(`.count${event.value}`).innerHTML = `In your cart: ${state.count[event.value]}`
    }
}

export default CreateStore

