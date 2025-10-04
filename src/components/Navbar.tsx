import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, LogIn, LogOut, Settings } from "lucide-react";

interface NavbarProps {
	isLoggedIn: boolean;
	setIsLoggedIn: (value: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isLoggedIn, setIsLoggedIn }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [username, setUsername] = useState<string | null>(null);
	const navigate = useNavigate();

	useEffect(() => {
		if (isLoggedIn) {
			const storedUser = localStorage.getItem("username");
			if (storedUser) setUsername(storedUser);
		} else {
			setUsername(null);
		}
	}, [isLoggedIn]);

	const handleLogout = () => {
		setIsLoggedIn(false);
		localStorage.removeItem("isLoggedIn");
		localStorage.removeItem("username");
		setUsername(null);
		setIsOpen(false);
		navigate("/");
	};

	const handleSignIn = () => {
		navigate("/login");
		setIsOpen(false);
	};

	const goToSettings = () => {
		navigate("/settings");
		setIsOpen(false);
	};

	return (
		<header className="bg-dark border-b border-dark-lighter sticky top-0 z-50">
			<nav className="container mx-auto flex justify-between items-center py-6 px-6">
				{/* Logo */}
				<Link
					to="/"
					onClick={() => setIsOpen(false)}
					className="text-3xl font-bold text-primary hover:opacity-80 transition">
					MyBoards
				</Link>

				{/* Desktop Menu */}
				<ul className="hidden md:flex gap-6 items-center">
					{isLoggedIn && (
						<li>
							<Link
								to="/boards"
								className="hover:text-primary transition">
								Boards
							</Link>
						</li>
					)}
					<li>
						<Link
							to="/about"
							className="hover:text-primary transition">
							About
						</Link>
					</li>
					<li>
						<Link
							to="/blog"
							className="hover:text-primary transition">
							Blog
						</Link>
					</li>
					<li>
						<Link
							to="/contacts"
							className="hover:text-primary transition">
							Contacts
						</Link>
					</li>

					{isLoggedIn ? (
						<>
							{/* Welcome message */}
							<li className="text-gray-200 text-xs font-medium">
								Hello, <span className="text-primary ml-1">{username}</span>
							</li>
							{/* Settings icon */}
							<li>
								<button
									onClick={goToSettings}
									className="p-2 rounded hover:bg-dark-lighter transition"
									title="Settings">
									<Settings className="w-5 h-5 text-gray-200" />
								</button>
							</li>

							<li>
								<button
									onClick={handleLogout}
									className="flex items-center gap-2 bg-primary text-dark px-4 py-1 rounded hover:opacity-90 transition">
									<LogOut className="size-4" />
									Logout
								</button>
							</li>
						</>
					) : (
						<li>
							<button
								onClick={handleSignIn}
								className="flex items-center gap-2 bg-primary text-dark px-4 py-1 rounded hover:opacity-90 transition">
								<LogIn className="size-4" />
								Sign In
							</button>
						</li>
					)}
				</ul>

				{/* Mobile Hamburger */}
				<button
					className="md:hidden text-primary focus:outline-none"
					onClick={() => setIsOpen(!isOpen)}>
					{isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
				</button>
			</nav>

			{/* Mobile Menu */}
			<div className={`md:hidden fixed top-0 right-0 h-full w-1/2 bg-dark-light border-l border-dark-lighter transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out z-40`}>
				<div className="flex flex-col p-6 space-y-6">
					{isLoggedIn && (
						<Link
							to="/boards"
							className="hover:text-primary transition"
							onClick={() => setIsOpen(false)}>
							Boards
						</Link>
					)}
					<Link
						to="/about"
						className="hover:text-primary transition"
						onClick={() => setIsOpen(false)}>
						About
					</Link>
					<Link
						to="/blog"
						className="hover:text-primary transition">
						Blog
					</Link>
					<Link
						to="/contacts"
						className="hover:text-primary transition"
						onClick={() => setIsOpen(false)}>
						Contacts
					</Link>

					{isLoggedIn ? (
						<>
							<p className="text-gray-200 font-medium">
								Hello, <span className="text-primary">{username}</span>
							</p>

							<button
								onClick={handleLogout}
								className="bg-primary text-dark px-4 py-2 rounded hover:opacity-90 transition">
								Logout
							</button>
						</>
					) : (
						<button
							onClick={handleSignIn}
							className="bg-primary text-dark px-4 py-2 rounded hover:opacity-90 transition">
							Sign In
						</button>
					)}
				</div>
			</div>
		</header>
	);
};

export default Navbar;
