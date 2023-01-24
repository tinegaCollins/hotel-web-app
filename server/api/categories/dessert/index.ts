import Dessert from "~~/server/models/categories/Dessert";

export default defineEventHandler(async (event) => {
	// get all Dessert products
	return await Dessert.find().all()
});