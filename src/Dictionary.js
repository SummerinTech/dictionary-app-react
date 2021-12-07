import axios from "axios";
import React, { useState } from "react";
import Results from "./Results";
import "./Dictionary.css";

const Dictionary = (props) => {
	const [keyword, setKeyword] = useState(props.defaultKeyword);
	const [loaded, setLoaded] = useState(false);
	const [results, setResults] = useState(null);

	function load() {
		setLoaded(true);
		setKeyword("");
		search();
	}

	function searchDictionary(response) {
		console.log(response.data[0]);
		setResults(response.data[0]);
	}

	function search() {
		let dictionaryApi = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
		axios.get(dictionaryApi).then(searchDictionary);
	}

	function handleSubmit(e) {
		e.preventDefault();
		setKeyword("");
		search();
	}

	if (loaded) {
		return (
			<div className="Dictionary">
				<section>
					<h2>What do you want to look up? </h2>
					<form onSubmit={handleSubmit} className="Dictionary-form">
						<input
							type="search"
							onChange={(e) => setKeyword(e.target.value)}
							placeholder="Search for a definition..."
							defaultValue={props.defaultKeyword}
						></input>
					</form>
					<div className="hints">
						Suggested keywords: sunrise, wine, travel, yoga
					</div>
				</section>
				<Results results={results} />
			</div>
		);
	} else {
		load();
		return null;
	}
};

export default Dictionary;
