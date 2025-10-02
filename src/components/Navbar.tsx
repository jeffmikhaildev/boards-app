import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="bg-dark-light shadow-md sticky top-0 z-50">
			<nav className="container mx-auto flex justify-between items-center py-4 px-6">
				{/* Logo */}
				<Link
					to="/"
					className="text-xl font-bold text-primary hover:opacity-80 transition">
					MyBoards
				</Link>

				{/* Desktop Menu */}
				<ul className="hidden md:flex gap-6">
					<li>
						<Link
							to="/boards"
							className="hover:text-primary transition">
							Boards
						</Link>
					</li>
					<li>
						<Link
							to="/about"
							className="hover:text-primary transition">
							About
						</Link>
					</li>
					<li>
						<Link
							to="/contacts"
							className="hover:text-primary transition">
							Contacts
						</Link>
					</li>
				</ul>

				{/* Mobile Hamburger */}
				<button
					className="md:hidden text-primary focus:outline-none"
					onClick={() => setIsOpen(!isOpen)}>
					{isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
				</button>
			</nav>

			{/* Mobile Menu */}
			<div className={`md:hidden fixed top-0 right-0 h-full w-1/3 bg-dark-light border-l border-dark-lighter transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out z-40`}>
				<div className="flex flex-col p-6 space-y-6">
					<Link
						to="/boards"
						className="hover:text-primary transition"
						onClick={() => setIsOpen(false)}>
						Boards
					</Link>
					<Link
						to="/about"
						className="hover:text-primary transition"
						onClick={() => setIsOpen(false)}>
						About
					</Link>
					<Link
						to="/contacts"
						className="hover:text-primary transition"
						onClick={() => setIsOpen(false)}>
						Contacts
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
