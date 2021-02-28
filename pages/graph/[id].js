import React, { useState, useEffect } from "react";
import GraphComponent from "../../components/grapgComponent";

function Graph({ id }) {
	const [data, setData] = useState();
	useEffect(() => {
		fetch(`http://localhost:3000/api/findgraph/${id}`)
			.then((res) => res.json())
			.then((json) => setData(json));
	}, []);
	return (
		<div>
			{data &&
				data.map((ob) => {
					return (
						<div>
							{ob.label}
							<GraphComponent id={ob._id} data={ob.options} />
						</div>
					);
				})}
		</div>
	);
}
Graph.getInitialProps = async ({ query }) => {
	const { id } = query;

	return { id: id };
};

export default Graph;
