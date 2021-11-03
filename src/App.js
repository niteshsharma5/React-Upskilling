import "./App.css";

import Counter from "./components/Counter/Counter";
import Name from "./components/Name/Name";
import Form from "./components/Form/Form";
import ApiBasic from "./components/ApiBasic/ApiBasic";

function App() {
	return (
		<div className="App">
			<Counter />
			<Name />
			<Form />
			<ApiBasic />
		</div>
	);
}

export default App;
