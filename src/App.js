import "./App.css";

import Counter from "./components/Counter/";
import Name from "./components/Name/";
import Form from "./components/Form/";
import ApiBasic1 from "./components/ApiBasic1/";
import ApiBasic2 from "./components/ApiBasic2/";
import ApiBasic3 from "./components/ApiBasic3/";
import ReRender from "./components/ReRender/";

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
