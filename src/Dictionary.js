import axios from "axios";
import React, { useState } from "react";
import "./Dictionary.css";

const Dictionary = () => {
	const [keyword, setKeyword] = useState("");

	function searchDictionary(response) {
		console.log(response.data[0]);
	}

	function handleSubmit(e) {
		e.preventDefault();
		setKeyword("");
		let dictionaryApi = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
		axios.get(dictionaryApi).then(searchDictionary);
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
