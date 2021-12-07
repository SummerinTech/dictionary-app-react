import React from "react";

const Phonetics = (props) => {
	console.log(props.phonetic);
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
