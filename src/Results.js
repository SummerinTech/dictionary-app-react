import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./Results.css";

const Results = (props) => {
	if (props.results) {
		return (
			<div className="Results">
				<section>
					<h2 className="Results-word">{props.results.word}</h2>
					{props.results.phonetics.map((phonetic, index) => {
						return <Phonetics key={index} phonetic={phonetic} />;
					})}
				</section>
				{props.results.meanings.map((meaning, index) => {
					return (
						<section key={index}>
							<Meaning meaning={meaning} />
						</section>
					);
				})}
			</div>
		);
	} else return null;
};

export default Results;
