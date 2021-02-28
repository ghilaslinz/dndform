import mongoose from "mongoose";

const graphSchema = new mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	formId: String,
	qusetionId: String,
	ques: String,
	optionId: String,
	text: String,
	count: Number,
});
module.exports = mongoose.models.graph || mongoose.model("graph", graphSchema);
