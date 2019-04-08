import React from "react";

const SimpsonQuotes = ({ simpson }) => {
	return (
		<div>
			<p> {simpson.quote} </p>
			<img src={simpson.image} alt="simpson" />
			<h1> {simpson.character} </h1>/>
		</div>
	);
};

export default SimpsonQuotes;
