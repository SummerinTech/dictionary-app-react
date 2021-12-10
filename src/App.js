import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dictionary from "./Components/Dictionary";

const App = () => {
	return (
		<div className="App">
			<div className="container">
				<header className="App-header">
					<h1>Dictionary App 🤓</h1>
				</header>
				<main>
					<Dictionary defaultKeyword="Wanderlust" />
				</main>
				<footer className="App-footer">
					<small>
						<a
							className="github-link"
							href="https://github.com/SummerinTech/dictionary-app-react"
							target="__blank"
						>
							Open-source code
						</a>{" "}
						created by Summer Robinson
					</small>
				</footer>
			</div>
		</div>
	);
};

export default App;
