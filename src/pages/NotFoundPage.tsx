import { Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
	const navigate = useNavigate();

	return (
		<section className="flex flex-col items-center justify-center min-h-[70vh] text-center space-y-6 px-6">
			{/* Big 404 */}
			<h1 className="text-8xl font-extrabold text-primary drop-shadow-lg">404</h1>

			{/* Message */}
			<p className="text-xl text-gray-400 max-w-md">Oops! The page you are looking for doesn’t exist or may have been moved.</p>

			{/* CTA Button */}
			<button
				onClick={() => navigate("/")}
				className="flex items-center gap-3 px-6 py-3 bg-primary text-dark rounded-md font-semibold hover:opacity-90 transition duration-200 shadow-md">
				<Home className="w-5 h-5" />
				Back to Home
			</button>
		</section>
	);
};

export default NotFoundPage;
