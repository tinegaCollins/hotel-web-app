import { defineStore } from "pinia";
import { Istarter_products } from "~~/types";


export const useStarterProducts = defineStore("starter-products-store", {
	state: () => ({
		// List of all products
		starterProducts:[] as Istarter_products[],
	}),
	actions: {
		// Get all starter_products from DB
		async getAllStarterProducts() {
			try {
				let data = await $fetch<Istarter_products[]>('/api/categories/starter/');
				this.starterProducts = data;
				return data as Istarter_products[];
			} catch (e) {
				console.log(e);
                
			}
		},
	
	},
});