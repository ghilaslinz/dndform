import React, { useEffect, useState } from "react";
import FormBuilder from "react-form-builder2";
import DemoBar from "../../components/demobar";

function EditForm({ id }) {
	const postUrl = `/api/findform/${id}`;

	return (
		<div>
			<DemoBar postUrl={postUrl} />
			<FormBuilder.ReactFormBuilder url={postUrl} saveUrl={postUrl} />
		</div>
	);
}

EditForm.getInitialProps = async ({ query }) => {
	const { id } = query;

	return {
		id: id,
	};
};

export default EditForm;
