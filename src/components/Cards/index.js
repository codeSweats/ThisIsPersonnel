import React from "react";

function Cards(props) {
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img src={props.image} className="card-img-top" alt="employee" />
			<div className="card-body">
				<p className="card-text">{props.name}</p>
				<p className="card-text">{props.lastName}</p>
				<p className="card-text">{props.phone}</p>
				<p className="card-text">{props.email}</p>
			</div>
		</div>
	);
}

export default Cards;
