import dbconnect from "../../../mongoose/mongoose";
import graph from "../../../mongoose/models/graph";
import form from "../../../mongoose/models/form";
dbconnect();

const getit = async (label, id) => {
	const ss = await graph.find({ formId: id, ques: label }).exec();
	return ss;
};

const getgraph = async (data, id) => {
	const newdata = [];
	if (data) {
		for (let i = 0; i < data[0].tools.length; i++) {
			const tool = data[0].tools[i];
			const da = await getit(tool.label, id);
			newdata.push({ label: tool.label, options: da });
		}
	}
	return newdata;
};

const handlegraphshape = async (id) => {
	const data = await form.find({ _id: id }).exec();

	return data;
};

export default async (req, res) => {
	const { method, query } = req;
	switch (method) {
		case "GET":
			try {
				const data = await handlegraphshape(query.id);
				const newdata = await getgraph(data, query.id);
				res.json(newdata);
			} catch (error) {
				console.log("err", error);
				res.status(404).json({ sucees: false });
			}
			break;

		default:
			break;
	}
};
