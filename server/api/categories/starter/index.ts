import starter_products from "~~/server/models/categories/starter_products";

export default defineEventHandler(async (event) => {
	// get all starter products
	return await starter_products.find()
});