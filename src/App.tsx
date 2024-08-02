import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
	return (
		<ThemeContextProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</ThemeContextProvider>
	);
}

export default App;
