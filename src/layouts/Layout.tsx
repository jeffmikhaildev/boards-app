import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../pages/Footer";

const Layout = () => {
	return (
		<div className="flex flex-col min-h-screen bg-dark text-gray-100">
			{/* Navbar */}
			<Navbar />

			{/* Main Content */}
			<main className="flex-grow container mx-auto p-6">
				<Outlet />
			</main>

			{/* Footer */}
			<Footer />
		</div>
	);
};

export default Layout;
