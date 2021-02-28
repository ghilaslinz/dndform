import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { ReactFormGenerator } from "react-form-builder2";
//import "react-form-builder2/dist/app.css";

function displayform({ id }) {
	const [data, setData] = useState();
	useEffect(() => {
		fetch(`http://localhost:3000/api/findform/${id}`)
			.then((res) => res.json())
			.then((json) => setData(json));
	}, []);
	console.log(data);
	const onSubmit = async (datas) => {
		const res = await fetch(`http://localhost:3000/api/submitform/${id}`, {
			method: "POST",
			headers: {
				"Content-type": "application/json; charset=UTF-8",
			},
			body: JSON.stringify(datas),
		});
		const json = await res.json();
		console.log(json);
	};

	return (
		<div>
			{data && (
				<div className='modal-dialog modal-lg'>
					<div className='modal-content'>
						<div className='modal-body'>
							<ReactFormGenerator
								//back_action='/'
								//back_name='Back'
								onSubmit={onSubmit}
								read_only={false}
								data={data}
							/>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

displayform.getInitialProps = async ({ query }) => {
	const { id } = query;

	return { id: id };
};
export default displayform;
