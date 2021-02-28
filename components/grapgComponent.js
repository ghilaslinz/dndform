import React, { Component } from "react";

class GraphComponent extends Component {
	render() {
		return (
			<ul>
				{this.props.data.map((ob, i) => {
					let w = (ob.count / 100) * 500;
					return (
						<li key={i}>
							<div style={{ width: "500px" }}>
								<span>{ob.text}</span>
							</div>
							<div
								style={{
									width: "500px",
									display: "flex",
									justifyContent: "space-between",
									backgroundColor: "yellow",
								}}
							>
								<span
									style={{ width: w, backgroundColor: "red", color: "red" }}
								>
									{}
								</span>
								<span>{ob.count}</span>
							</div>
						</li>
					);
				})}
			</ul>
		);
	}
}
export default GraphComponent;
