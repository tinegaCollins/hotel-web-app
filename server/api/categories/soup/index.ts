import Soup from "~~/server/models/categories/Soup";

export default defineEventHandler(async (event) => {
	// get all Soup products
	return await Soup.find().all()
});