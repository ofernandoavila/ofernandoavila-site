import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ThemeContextProvider from "./components/theme-manager/contexts/ThemeContext";
import Links from "./pages/Links";
import Home from "./pages/Home";
import Post from "./pages/Post";

function App() {
	return (
		<ThemeContextProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/post/:id" element={<Post />} />
					<Route path="/links" element={<Links />} />

					{/* <Route
						path="*"
						element={<Navigate to="/links" replace />}
					/> */}
				</Routes>
			</BrowserRouter>
		</ThemeContextProvider>
	);
}

export default App;
