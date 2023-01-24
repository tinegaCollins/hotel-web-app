import mongoose from "mongoose";

// book schema
const schema: mongoose.Schema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
        rating: {
			type: String,
			required: true,
		},
        Img_src: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

// starter model
export default mongoose.model("Starter", schema);