import React from "react";

const Meaning = (props) => {
	return (
		<div className="Meaning">
			<h3>{props.meaning.partOfSpeech}</h3>

			{props.meaning.definitions.map((definition, index) => {
				return (
					<div key={index}>
						<p>
							{definition.definition}
							<br />
							<em>{definition.example}</em>
						</p>
					</div>
				);
			})}
		</div>
	);
};

export default Meaning;