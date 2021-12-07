import React from "react";
import "./Results.css";

const Results = (props) => {
	return (
		<div className="Results">
			<h3 className="Results-word">{props.word}</h3>
			<h3 className="Results-type">{props.type}</h3>
			<p className="Results-defintion">{props.definition}</p>
			<p className="Results-example">{props.example}</p>
		</div>
	);
};

export default Results;
