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
                console.log(this.starterProducts.length);
                
				return data as Istarter_products[];
			} catch (e) {
				console.log(e);
                
			}
		},
		// Create a new book
		/* async create(book: IBook) {
			await $fetch("/api/books/create", {
				method: "POST",
				body: book,
			})
				.catch((e) => {
					useToast().error(e.data.message);
				})
				.then(async () => {
					await this.getAll();
					useToast().success("Book created");
				});
		}, */
		// Update a book
		/* async update(id: string, book: IBook) {
			await $fetch(`/api/books/${id}`, {
				method: "PUT",
				body: book,
			})
				.catch((e) => {
					useToast().error(e.data.message);
				})
				.then(async () => {
					await this.getAll();
					useToast().success("Book updated");
				});
		}, */
		// delete a book
	/* 	async remove(id: string) {
			await $fetch(`/api/books/${id}`, {
				method: "DELETE",
			})
				.catch((e) => {
					useToast().error(e.data.message);
				})
				.then(async () => {
					await this.getAll();
					useToast().success("Book removed");
				});
		}, */
	},
});