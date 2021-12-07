import axios from "axios";
import React, { useState } from "react";
import Results from "./Results";
import "./Dictionary.css";

const Dictionary = () => {
	const [keyword, setKeyword] = useState("");
	const [results, setResults] = useState(null);

	function searchDictionary(response) {
		console.log(response.data[0]);
		setResults(response.data[0]);
	}

	function handleSubmit(e) {
		e.preventDefault();
		setKeyword("");
		let dictionaryApi = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
		axios.get(dictionaryApi).then(searchDictionary);
	}

	return (
		<div className="Dictionary">
			<section>
				<form onSubmit={handleSubmit} className="Dictionary-form">
					<input
						type="search"
						onChange={(e) => setKeyword(e.target.value)}
						value={keyword}
						placeholder="Search for a definition..."
					></input>
				</form>
				<div className="hints">
					Suggested keywords: sunset, wine, travel, yoga
				</div>
			</section>
			<Results results={results} />
		</div>
	);
};

export default Dictionary;
