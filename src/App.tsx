import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/Layout";
import BoardsList from "./pages/BoardsList";
import BoardDetails from "./pages/BoardDetails";
import CardDetails from "./pages/CardDetails";
import NotFoundPage from "./pages/NotFoundPage";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";

const routes = [
	{
		path: "/",
		element: <Layout />,
		errorElement: <NotFoundPage />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/contacts",
				element: <Contacts />,
			},
			{
				path: "/boards",
				element: <BoardsList />,
			},
			{
				path: "/boards/:boardId",
				element: <BoardDetails />,
			},
			{
				path: "/boards/:boardId/cardId",
				element: <CardDetails />,
			},
			{
				path: "/terms",
				element: <Terms />,
			},
			{
				path: "/privacy",
				element: <Privacy />,
			},
		],
	},
];

const router = createBrowserRouter(routes);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
