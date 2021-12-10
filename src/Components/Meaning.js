import React from "react";
import Synonyms from "./Synonyms";
import "./Styles/Meaning.css";

const Meaning = (props) => {
	return (
		<div className="Meaning">
			<h3>{props.meaning.partOfSpeech}</h3>

			{props.meaning.definitions.map((definition, index) => {
				return (
					<div key={index}>
						<div className="definition">{definition.definition}</div>
						<div className="example">{definition.example}</div>
						<Synonyms synonyms={definition.synonyms} />
					</div>
				);
			})}
		</div>
	);
};

export default Meaning;
