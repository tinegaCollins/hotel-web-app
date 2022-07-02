import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart1',{
    state: ()=> ({
        cart: []
    }),
    getters: {
        
    },
    actions: {
        addtoCart(item:object){
            const ifHas:boolean = this.cart.includes(item);
            if(ifHas === false){
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
        }
    }
});