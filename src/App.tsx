import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";

import Login from "./pages/SignIn";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import BoardsList from "./pages/BoardsList";
import Register from "./pages/Register";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		const storedLogin = localStorage.getItem("isLoggedIn");
		setIsLoggedIn(storedLogin === "true");
	}, []);

	return (
		<BrowserRouter>
			<Routes>
				<Route
					element={
						<Layout
							isLoggedIn={isLoggedIn}
							setIsLoggedIn={setIsLoggedIn}
						/>
					}>
					<Route
						path="/"
						element={<Home />}
					/>
					{isLoggedIn && (
						<Route
							path="/boards"
							element={<BoardsList />}
						/>
					)}
					<Route
						path="/about"
						element={<About />}
					/>
					<Route
						path="/contacts"
						element={<Contacts />}
					/>
					<Route
						path="/login"
						element={<Login setIsLoggedIn={setIsLoggedIn} />}
					/>
					<Route
						path="/register"
						element={<Register setIsLoggedIn={setIsLoggedIn} />}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
