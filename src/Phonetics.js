import React from "react";
import "./Phonetics.css";

const Phonetics = (props) => {
	return (
		<div className="Phonetics">
			<a href={props.phonetic.audio} target="__blank">
				Listen
			</a>
			<p>{props.phonetic.text}</p>
		</div>
	);
};

export default Phonetics;
