import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart1',{
    state: ()=> ({
        cart: []
    }),
    getters: {
        
    },
    actions: {
        addtoCart(item){
            const ifItemInCart = this.cart.some((element)=>{
                return element.itemID = item.id;
            })
            if(ifItemInCart === false){
                this.cart.push(item)
                console.log(this.cart);
                
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