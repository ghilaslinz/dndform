import dbconnect from "../../../mongoose/mongoose";

import graph from "../../../mongoose/models/graph";

dbconnect();

const handleoldansewers = async (newGraphdata, id) => {
	newGraphdata.forEach((ob) => {
		if (typeof ob.value !== "string") {
			ob.value.forEach((key) => {
				const findGraph = graph
					.find({ formId: id, optionId: key })
					.exec((err, result) => {
						if (result !== "undefined") {
							if (result[0] !== "undefined") {
								const answe = graph
									.findOneAndUpdate(
										{ _id: result[0]._id },
										{ $inc: { count: 1 } }
									)
									.exec((errrr, anss) => {
										console.log(errrr);
									});
							}
						}
					});
			});
		} else {
			if (ob !== "undefined") {
				const findGrap = graph
					.find({ formId: id, text: ob.value })
					.exec((err, result) => {
						if (result !== "undefined") {
							if (result[0] !== "undefined") {
								const answer = graph
									.findOneAndUpdate(
										{ _id: result[0]._id },
										{ $inc: { count: 1 } }
									)
									.exec((errr, ans) => {
										console.log(errr);
									});
							}
						}
					});
			}
		}
	});
};

export default async (req, res) => {
	const { method, query } = req;
	switch (method) {
		case "GET":
			try {
				const findGraph = await graph.findById(query.id);
				res.json(findGraph);
			} catch (error) {
				res.status(400).json({ error });
				res.end();
			}
			break;
		case "POST":
			try {
				const handledAns = await handleoldansewers(req.body, query.id);
				res.json(handledAns);
			} catch (error) {
				console.log(error);
				res.status(400).json({ sucees: false });
			}
			break;

		default:
			break;
	}
};
