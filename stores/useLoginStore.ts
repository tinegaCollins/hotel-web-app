import { defineStore } from 'pinia';

export const useLoginStore = defineStore('logins',{
    state: ()=> ({
        userID: ''
    }),
    getters: {
        getID: (state)=> state.userID
    },
    actions : {
        setId(id:string){
            this.userID = id
        },
        delete(id:string){
            this.userID = ''
        }
    }
})