import { Link } from "react-router-dom";
import { Layout, CheckCircle2, Users, Zap } from "lucide-react";

const Home = () => {
	return (
		<div className="text-gray-200">
			{/* Hero Section */}
			<section className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
				{/* Left Content */}
				<div className="flex-1 space-y-6 text-center md:text-left">
					<h1 className="text-4xl md:text-6xl font-bold text-primary leading-tight">Welcome to MyBoards</h1>
					<p className="text-lg text-gray-400 max-w-lg mx-auto md:mx-0">Organize tasks, manage projects, and collaborate effortlessly. MyBoards gives you a clean and modern kanban experience designed to boost your productivity.</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
						<Link
							to="/boards"
							className="bg-primary text-dark font-semibold px-6 py-3 rounded-md hover:opacity-90 transition">
							Get Started
						</Link>
						<Link
							to="/about"
							className="border border-primary px-6 py-3 rounded-md hover:bg-primary hover:text-dark transition">
							Learn More
						</Link>
					</div>
				</div>

				{/* Right Illustration */}
				<div className="flex-1 flex justify-center">
					<div className="bg-dark-light rounded-lg shadow-lg p-8 flex flex-col gap-6 max-w-md w-full">
						<div className="flex items-center gap-3">
							<Layout className="text-primary w-6 h-6" />
							<p>Kanban-style Boards</p>
						</div>
						<div className="flex items-center gap-3">
							<Users className="text-primary w-6 h-6" />
							<p>Team Collaboration</p>
						</div>
						<div className="flex items-center gap-3">
							<CheckCircle2 className="text-primary w-6 h-6" />
							<p>Track Progress</p>
						</div>
						<div className="flex items-center gap-3">
							<Zap className="text-primary w-6 h-6" />
							<p>Boost Productivity</p>
						</div>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="bg-dark-light py-16">
				<div className="container mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
					<div>
						<h3 className="text-xl font-semibold text-primary">Simple</h3>
						<p className="text-gray-400 mt-2">Create boards and tasks in just a few clicks.</p>
					</div>
					<div>
						<h3 className="text-xl font-semibold text-primary">Collaborative</h3>
						<p className="text-gray-400 mt-2">Share boards with your team and work together seamlessly.</p>
					</div>
					<div>
						<h3 className="text-xl font-semibold text-primary">Flexible</h3>
						<p className="text-gray-400 mt-2">Customize your workflow to fit personal or business needs.</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
