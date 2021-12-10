import React from "react";
import "./Synonyms.css";

const Synonyms = (props) => {
	if (props.synonyms) {
		return props.synonyms.map((synonym, index) => {
			return (
				<ul className="Synonyms">
					{" "}
					<li key={index}>{synonym}</li>
				</ul>
			);
		});
	} else {
		return null;
	}
};

export default Synonyms;
