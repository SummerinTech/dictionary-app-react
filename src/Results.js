import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./Results.css";

const Results = (props) => {
	if (props.results) {
		return (
			<div className="Results">
				<h3 className="Results-word">{props.results.word}</h3>
				{props.results.phonetics.map((phonetic, index) => {
					return (
						<div key={index}>
							<Phonetics phonetic={phonetic} />
						</div>
					);
				})}
				{props.results.meanings.map((meaning, index) => {
					return (
						<div key={index}>
							<Meaning meaning={meaning} />
						</div>
					);
				})}
			</div>
		);
	} else return null;
};

export default Results;
