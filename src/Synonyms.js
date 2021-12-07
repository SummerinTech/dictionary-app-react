import React from "react";

const Synonyms = (props) => {
	if (props.synonyms) {
		return props.synonyms.map((synonym, index) => {
			return (
				<ul>
					<li key={index}>{synonym}</li>
				</ul>
			);
		});
	} else {
		return null;
	}
};

export default Synonyms;
