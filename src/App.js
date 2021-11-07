import "./App.css";

import Counter from "./components/Counter/Counter";
import Name from "./components/Name/Name";
import Form from "./components/Form/Form";
import ApiBasic from "./components/ApiBasic/ApiBasic";
import ApiBasic2 from "./components/ApiBasic2/ApiBasic2";

function App() {
	return (
		<div className="App">
			<Counter />
			<Name />
			<Form />
			<ApiBasic />
			<ApiBasic2 />
		</div>
	);
}

export default App;
