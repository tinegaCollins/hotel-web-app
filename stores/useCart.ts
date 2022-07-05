import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart1',{
    state: ()=> ({
        cart: []
    }),
    getters: {
        getCartNumber: (state)=> state.cart.length,
    },
    actions: {
        addtoCart(item){
            const newElement = this.cart.some((element:any)=>{
                return element.itemID == item.itemID
            })
            if(newElement === false){
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