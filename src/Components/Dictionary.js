import axios from "axios";
import React, { useState } from "react";
import Results from "./Results";
import Photos from "./Photos";
import "./Styles/Dictionary.css";

const Dictionary = (props) => {
	const [keyword, setKeyword] = useState(props.defaultKeyword);
	const [loaded, setLoaded] = useState(false);
	const [results, setResults] = useState(null);
	const [photos, setPhotos] = useState(null);

	function load() {
		setLoaded(true);
		search();
	}

	function searchDictionary(response) {
		setResults(response.data[0]);
	}

	function searchPexels(response) {
		setPhotos(response.data.photos);
	}

	function search() {
		let dictionaryApi = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
		let pexelsApiKey =
			"563492ad6f91700001000001a713d8079b7740ef935eeced059952af";
		let pexelsApi = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
		axios.get(dictionaryApi).then(searchDictionary);
		axios
			.get(pexelsApi, {
				headers: {
					Authorization: pexelsApiKey,
				},
			})
			.then(searchPexels);
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
				<Photos photos={photos} keyword={keyword} />
			</div>
		);
	} else {
		load();
		return null;
	}
};

export default Dictionary;
