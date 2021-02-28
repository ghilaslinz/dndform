import dbconnect from "../../../mongoose/mongoose";
import form from "../../../mongoose/models/form";
import graph from "../../../mongoose/models/graph";
import mongoose from "mongoose";
dbconnect();

const handleGraphdata = (data, formid) => {
	let newgraphans = [];
	const l = data.length;
	for (let i = 0; i < l; i++) {
		const element = data[i];
		if (element.options) {
			const kl = element.options.length;
			for (let k = 0; k < kl; k++) {
				const elementt = element.options[k];

				graph
					.find({
						formId: formid,
						qusetionId: element.id,
						optionId: elementt.key,
					})
					.exec((err, data) => {
						if (data.length < 1) {
							const newgraf = new graph({
								_id: new mongoose.Types.ObjectId(),
								formId: formid,
								qusetionId: element.id,
								ques: element.label,
								optionId: elementt.key,
								text: elementt.text,
								count: 0,
							});
							newgraf.save().then((data) => {
								console.log(data);
							});
						} else {
							if (
								data[0].text === "Place holder option 1" ||
								data[0].text === "Place holder option 2" ||
								data[0].text === "Place holder option 3" ||
								data[0].text === "Place holder option 4"
							) {
								graph.findOneAndDelete({ _id: data[0]._id });
							}
						}
					});
			}
		}
	}
};

export default async (req, res) => {
	const { method, query } = req;
	switch (method) {
		case "GET":
			try {
				await form.findById(query.id).then((data) => {
					if (data.tools) {
						res.json([...data.tools]);
					}
				});
			} catch (error) {
				res.status(404).json({ error });
				res.end();
			}
			break;
		case "POST":
			try {
				if (req.body.task_data.length !== 0) {
					form
						.updateOne(
							{ _id: query.id },
							{ $set: { tools: [...req.body.task_data] } }
						)
						.exec();
					const handlegraph = await handleGraphdata(
						req.body.task_data,
						query.id
					);

					if (handlegraph) {
						const handledAn = await handleoldansewers(req.body, query.id);
						res.status(200).json(handledAn);
					}
				}
			} catch (error) {
				console.log(error);
				res.status(400).json({ sucees: false });
			}
			break;

		default:
			break;
	}
};
