import React, { useState } from "react";
import "./Dictionary.css";

const Dictionary = () => {
	const [keyword, setKeyword] = useState("");

	function handleSubmit(e) {
		e.preventDefault();
		setKeyword("");
		alert(`Searching for ${keyword}`);
	}

	return (
		<div className="Dictionary">
			<form onSubmit={handleSubmit}>
				<input
					type="search"
					onChange={(e) => setKeyword(e.target.value)}
					value={keyword}
				></input>
			</form>
		</div>
	);
};

export default Dictionary;
