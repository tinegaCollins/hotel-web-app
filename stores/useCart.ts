import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart1',{
    state: ()=> ({
        cart: [],
        order: []
    }),
    getters: {
        getCartNumber: (state)=> state.cart.length,
    },
    actions: {
        addtoCart(item:string){
            const ifItemInCart:number = this.cart.indexOf(item);
            if(ifItemInCart === -1){
                this.cart.push(item)
            }
        },
        removeFromCart(item:string){
            const index:number = this.cart.indexOf(item);
            if(index != -1){
                this.cart.splice(index,1)
            }
        },
        clearCart(){
            this.cart = []
        },
        updateOrder(order:Array<object>){
            this.order = order
        }
    }
});