import { defineStore } from "pinia";
import { Istarter_products } from "~~/types";


export const useStarterProducts = defineStore("starter-products-store", {
	state: () => ({
		// List of all products
		starterProducts:[] as Istarter_products[],
	}),
	actions: {
		// Get all starter_products from DB
		async getAll() {
			try {
				let data = await $fetch<Istarter_products[]>("/api/starter");
				this.starterProducts = data;
				console.log(this.starterProducts);
				
				return data as Istarter_products[];
			} catch (e) {
				console.log(e.message);
				
			}
		},
	
	},
});

/* try {
				let data = await $fetch<Istarter_products[]>('http://localhost:3000/server/api/index');
				this.starterProducts = data;
				return data as Istarter_products[];
			} catch (e) {
				console.log(e);
                
			} */