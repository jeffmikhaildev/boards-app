import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/Layout";
import NotFound from "./pages/NotFound";
import BoardsList from "./pages/BoardsList";
import BoardDetails from "./pages/BoardDetails";
import CardDetails from "./pages/CardDetails";

const routes = [
	{
		path: "/",
		element: <Layout />,
		errorElement: <NotFound />,
		children: [
			{
				path: "/",
				element: <BoardsList />,
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
		],
	},
];

const router = createBrowserRouter(routes);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
