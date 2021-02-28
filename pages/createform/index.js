import React, { useEffect, useState } from "react";
import FormBuilder from "react-form-builder2";
import DemoBar from "../../components/demobar";

// Form Data

function Index({ id }) {
	const postUrl = `/api/findform/${id}`;

	return (
		<div>
			<DemoBar postUrl={postUrl} />
			<FormBuilder.ReactFormBuilder saveUrl={postUrl} />
		</div>
	);
}
Index.getInitialProps = async (ctx) => {
	const dummy = {
		tools: [{}, {}],
	};
	const res = await fetch("http://localhost:3000/api/createform", {
		method: "POST",
		headers: {
			"Content-type": "application/json; charset=UTF-8",
		},
		body: JSON.stringify(dummy.tools),
	});
	const json = await res.json();
	console.log(json);
	return { id: json };
};

export default Index;
