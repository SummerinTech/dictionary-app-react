import axios from "axios";
import React, { useState } from "react";
import Results from "./Results";
import "./Dictionary.css";

const Dictionary = () => {
	const [keyword, setKeyword] = useState("");
	const [dictionaryData, setDictionaryData] = useState({});

	function searchDictionary(response) {
		console.log(response.data[0]);
		setDictionaryData({
			word: response.data[0].word,
			type: response.data[0].meanings[0].partOfSpeech,
			definition: response.data[0].meanings[0].definitions[0].definition,
			example: response.data[0].meanings[0].definitions[0].example,
		});
	}

	function handleSubmit(e) {
		e.preventDefault();
		setKeyword("");
		let dictionaryApi = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
		axios.get(dictionaryApi).then(searchDictionary);
	}

	return (
		<div className="Dictionary">
			<form onSubmit={handleSubmit} className="Dictionary-form">
				<input
					type="search"
					onChange={(e) => setKeyword(e.target.value)}
					value={keyword}
				></input>
			</form>
			<Results
				word={dictionaryData.word}
				type={dictionaryData.type}
				definition={dictionaryData.definition}
				example={dictionaryData.example}
			/>
		</div>
	);
};

export default Dictionary;
