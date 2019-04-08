import React from "react";

const GenerateSimpsonQuotes = ({ newQuote }) => {
	return (
		<div>
			<button onClick={newQuote}> New quote </button>
		</div>
	);
};
export default GenerateSimpsonQuotes;
