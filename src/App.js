import "./App.css";

import Counter from "./components/Counter/Counter";
import Name from "./components/Name/Name";
import Form from "./components/Form/Form";
import ApiBasic1 from "./components/ApiBasic1/ApiBasic1";
import ApiBasic2 from "./components/ApiBasic2/ApiBasic2";
import ApiBasic3 from "./components/ApiBasic3/ApiBasic3";
import ReRender from "./components/ReRender/ReRender";

function App() {
	return (
		<div className="App">
			<Counter />
			<Name />
			<Form />
			<ApiBasic1 />
			<ApiBasic2 />
			<ApiBasic3 />
			<ReRender />
		</div>
	);
}

export default App;
