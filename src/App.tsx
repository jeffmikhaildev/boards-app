import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";

import Login from "./pages/SignIn";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import BoardsList from "./pages/BoardsList";
import Register from "./pages/Register";
import ScrollToTop from "./components/ScrollToTop";
import BoardDetails from "./pages/BoardDetails";
import CardDetails from "./pages/CardDetails";
import Settings from "./pages/Settings";
import Blog from "./pages/Blog";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");

	useEffect(() => {
		localStorage.setItem("isLoggedIn", isLoggedIn ? "true" : "false");
	}, [isLoggedIn]);

	return (
		<>
			<BrowserRouter>
				<ScrollToTop />
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
							<>
								<Route
									path="/boards"
									element={<BoardsList />}
								/>
								<Route
									path="/boards/:boardId"
									element={<BoardDetails />}
								/>
								<Route
									path="/boards/:boardId/card/:cardId"
									element={<CardDetails />}
								/>
								<Route
									path="/settings"
									element={<Settings />}
								/>
							</>
						)}
						<Route
							path="/about"
							element={<About />}
						/>
						<Route
							path="/blog"
							element={<Blog />}
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
			<ToastContainer
				position="top-right"
				autoClose={2000}
				hideProgressBar={false}
				newestOnTop
				closeOnClick
				pauseOnHover
				draggable
				theme="dark"
			/>
		</>
	);
}

export default App;
