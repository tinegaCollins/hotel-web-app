// eslint-disable-next-line camelcase
import starter_products from "~~/server/models/categories/starter_products";

export default defineEventHandler(async (event) => {
	// get all starter products
	const starterProducts =  await (await starter_products.find()).forEach((product)=>{
		console.log(product);
		
	})
	
	 return starterProducts
});