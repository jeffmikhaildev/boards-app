import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Github, Instagram } from "lucide-react";

const Footer = () => {
	return (
		<footer className="bg-dark border-t border-dark-lighter mt-12">
			<div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-12 text-sm">
				{/* Brand / About */}
				<div>
					<Link
						to="/"
						className="text-xl font-bold text-primary hover:opacity-80 transition">
						MyBoards
					</Link>
					<p className="text-gray-400 leading-relaxed">Organize tasks, manage projects, and boost productivity with a clean and modern kanban-style board system.</p>
				</div>

				{/* Quick Links */}
				<div>
					<h3 className="text-primary font-semibold tracking-wide mb-4">Quick Links</h3>
					<ul className="space-y-3">
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
				</div>

				{/* Social Media */}
				<div>
					<h3 className="font-semibold tracking-wide mb-4 text-primary">Connect with us</h3>
					<div className="flex gap-3">
						<a
							href="https://facebook.com"
							target="_blank"
							className="p-2 rounded-full bg-dark-lighter text-gray-400 hover:text-primary hover:bg-dark transition">
							<Facebook className="w-5 h-5" />
						</a>
						<a
							href="https://twitter.com"
							target="_blank"
							className="p-2 rounded-full bg-dark-lighter text-gray-400 hover:text-primary hover:bg-dark transition">
							<Twitter className="w-5 h-5" />
						</a>
						<a
							href="https://linkedin.com"
							target="_blank"
							className="p-2 rounded-full bg-dark-lighter text-gray-400 hover:text-primary hover:bg-dark transition">
							<Linkedin className="w-5 h-5" />
						</a>
						<a
							href="https://github.com"
							target="_blank"
							className="p-2 rounded-full bg-dark-lighter text-gray-400 hover:text-primary hover:bg-dark transition">
							<Github className="w-5 h-5" />
						</a>
						<a
							href="https://instagram.com"
							target="_blank"
							className="p-2 rounded-full bg-dark-lighter text-gray-400 hover:text-primary hover:bg-dark transition">
							<Instagram className="w-5 h-5" />
						</a>
					</div>
				</div>
			</div>

			{/* Bottom bar */}
			<div className="border-t border-dark-lighter py-3">
				<div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 text-gray-500 text-xs">
					<p>© {new Date().getFullYear()} MyBoards. All rights reserved.</p>
					<div className="flex gap-4 mt-3 md:mt-0">
						<Link
							to="/privacy"
							className="hover:text-primary transition">
							Privacy Policy
						</Link>
						<Link
							to="/terms"
							className="hover:text-primary transition">
							Terms of Service
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
