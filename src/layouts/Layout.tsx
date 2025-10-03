import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface LayoutProps {
	isLoggedIn: boolean;
	setIsLoggedIn: (value: boolean) => void;
}

const Layout: React.FC<LayoutProps> = ({ isLoggedIn, setIsLoggedIn }) => {
	return (
		<div className="flex flex-col min-h-screen text-gray-100">
			{/* Navbar */}
			<Navbar
				isLoggedIn={isLoggedIn}
				setIsLoggedIn={setIsLoggedIn}
			/>

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
