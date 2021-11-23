import "./App.css";

import Counter from "./components/Counter/";
import Name from "./components/Name/";
import Form from "./components/Form/";
import APIBasic1 from "./components/APIBasic1/";
import APIBasic2 from "./components/APIBasic2/";
import APIBasic3 from "./components/APIBasic3/";
import ReRender from "./components/ReRender/";
import APIParallel from "./components/APIParallel";
import APIDown from "./components/APIDown";
import APIOptimise from "./components/APIOptimise";
import DigitalClock from "./components/DigitalClock";
import WindowSizeHandler from "./components/WindowSizeHandler";
import A from "./components/ThemeMode";

function App() {
	return (
		<div className="App">
			<Counter />
			<Name />
			<Form />
			<APIBasic1 />
			<APIBasic2 />
			<APIBasic3 />
			<ReRender />
			<APIParallel />
			<APIDown />
			<APIOptimise />
			<DigitalClock />
			<WindowSizeHandler />
			<A />
		</div>
	);
}

export default App;
