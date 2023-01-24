import Main from "~~/server/models/categories/Main";

export default defineEventHandler(async (event) => {
	// get all Main products
	return await Main.find().all()
});