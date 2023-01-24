import Soup from "~~/server/models/categories/Soup";

// eslint-disable-next-line no-undef
export default defineEventHandler(async (event) => {
	// get all Soup products
	return await Soup.find().all()
});