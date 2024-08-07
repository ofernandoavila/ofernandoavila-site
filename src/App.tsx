import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ThemeContextProvider from "./contexts/ThemeContext";
import Links from "./pages/Links";

function App() {
	return (
		<ThemeContextProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/links" element={<Links />} />

					<Route
						path="*"
						element={<Navigate to="/links" replace />}
					/>
				</Routes>
			</BrowserRouter>
		</ThemeContextProvider>
	);
}

export default App;
