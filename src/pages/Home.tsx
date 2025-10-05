import { Link } from "react-router-dom";
import { Layout, CheckCircle2, Users, Zap } from "lucide-react";
import { useEffect, useState } from "react";

// Helper component for step cards with hover animation
const StepCard = ({ step, title, description }: { step: string; title: string; description: string }) => (
	<div className="bg-dark-lighter p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:bg-dark-light animate-fadeIn flex flex-col items-center justify-center text-center">
		<div className="flex justify-center items-center w-14 h-14 bg-primary text-dark rounded-full mb-6 font-bold text-lg">{step}</div>
		<h3 className="text-xl font-semibold text-primary mb-2 transition-colors duration-300 hover:text-primaryLight">{title}</h3>
		<p className="text-gray-400">{description}</p>
	</div>
);

const features = [
	{
		title: "Simple",
		description: "Quickly create boards and tasks with an intuitive drag-and-drop interface. Start organizing in seconds.",
		iconPath: "M3 7h18M3 12h18M3 17h18",
	},
	{
		title: "Collaborative",
		description: "Share boards with your team, assign tasks, and track progress together seamlessly in real-time.",
		iconPath: "M17 20h5v-5M12 12l-8 8V4h8",
	},
	{
		title: "Flexible",
		description: "Customize your workflow, columns, and board layouts to match personal projects or business needs.",
		iconPath: "M4 6h16M4 12h8m-8 6h16",
	},
];

const Home = () => {
	const [offsetY, setOffsetY] = useState(0);

	const handleScroll = () => setOffsetY(window.scrollY);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className="text-gray-200">
			{/* Hero Section */}
			<section className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
				<div className="flex-1 space-y-6 text-center md:text-left">
					<h1 className="text-4xl md:text-6xl font-bold text-primary leading-tight">Take Control of Your Workflow</h1>
					<p className="text-lg text-gray-400 max-w-lg mx-auto md:mx-0 transition-all duration-500 animate-fadeInUp delay-100">Streamline tasks, manage projects, and collaborate seamlessly. MyBoards provides a clean, modern kanban experience to help you get more done with less hassle.</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fadeInUp delay-200">
						{/* <Link
            to="/boards"
            className="relative inline-block px-8 py-3 font-semibold rounded-md bg-primary text-dark shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105 hover:bg-primaryLight hover:text-dark">
            Get Started
        </Link> */}
						<Link
							to="/about"
							className="relative inline-block px-8 py-3 font-semibold rounded-md border-2 border-primary text-primary shadow hover:shadow-md transform transition-all duration-300 hover:scale-105">
							Learn More
						</Link>
					</div>
				</div>

				<div className="flex-1 flex justify-center">
					<div className="bg-dark-light rounded-xl shadow-lg p-8 flex flex-col gap-6 max-w-md w-full">
						{[
							{ icon: Layout, text: "Kanban-style Boards" },
							{ icon: Users, text: "Team Collaboration" },
							{ icon: CheckCircle2, text: "Track Progress" },
							{ icon: Zap, text: "Boost Productivity" },
						].map((item, idx) => (
							<div
								key={idx}
								className="flex items-center gap-3 p-3 rounded-md cursor-pointer bg-dark-lighter hover:bg-primary/10 transition-all duration-300 transform hover:translate-x-2 hover:scale-105 shadow hover:shadow-lg">
								<item.icon className="text-primary w-6 h-6 transition-colors duration-300" />
								<p className="text-gray-200 font-medium transition-colors duration-300">{item.text}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Features Section with Parallax */}
			<section
				className="relative bg-cover bg-center bg-fixed py-20"
				style={{ backgroundImage: "url('/path-to-your-parallax-image.jpg')", backgroundPositionY: `${offsetY * 0.5}px` }}>
				<div className="absolute inset-0 bg-black/50"></div>
				<div className="relative container mx-auto px-6 text-center text-gray-200">
					<h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 animate-fadeInUp">Why Choose MyBoards?</h2>
					<div className="grid md:grid-cols-3 gap-8">
						{features.map((feature, index) => (
							<div
								key={index}
								className="bg-dark-lighter p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 animate-fadeInUp delay-[${index * 100}ms]">
								<div className="flex justify-center mb-4">
									<svg
										className="w-10 h-10 text-primary"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										viewBox="0 0 24 24">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d={feature.iconPath}
										/>
									</svg>
								</div>
								<h3 className="text-xl font-semibold text-primary mb-2">{feature.title}</h3>
								<p className="text-gray-400">{feature.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* How It Works */}
			<section className="py-20">
				<div className="container mx-auto px-6 text-center">
					<h2 className="text-4xl font-bold text-primary mb-12 animate-fadeInUp">How It Works</h2>
					<div className="grid md:grid-cols-3 gap-10">
						<StepCard
							step="1"
							title="Create Board"
							description="Start by creating your board and defining columns for your workflow."
						/>
						<StepCard
							step="2"
							title="Add Tasks"
							description="Add tasks, assign them to team members, and set deadlines effortlessly."
						/>
						<StepCard
							step="3"
							title="Track Progress"
							description="Monitor task status, move cards across columns, and achieve goals efficiently."
						/>
					</div>
				</div>
			</section>

			{/* Productivity Tips Section */}
			<section className="py-20 bg-dark-light">
				<div className="container mx-auto px-6 text-center">
					<h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 animate-fadeInUp">Productivity Tips</h2>
					<div className="grid md:grid-cols-3 gap-10">
						<div className="bg-dark-lighter p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
							<h3 className="text-xl font-semibold text-primary mb-2">Break Work into Tasks</h3>
							<p className="text-gray-400">Divide big goals into smaller tasks to stay focused and avoid overwhelm.</p>
						</div>

						<div className="bg-dark-lighter p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
							<h3 className="text-xl font-semibold text-primary mb-2">Prioritize Wisely</h3>
							<p className="text-gray-400">Use columns like "To Do, In Progress, Done" to visualize and prioritize your work.</p>
						</div>

						<div className="bg-dark-lighter p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
							<h3 className="text-xl font-semibold text-primary mb-2">Track Your Progress</h3>
							<p className="text-gray-400">Regularly update tasks and celebrate milestones to stay motivated.</p>
						</div>
					</div>
				</div>
			</section>

			{/* Newsletter Section */}
			<section className="py-20 bg-gradient-to-br from-dark-light via-dark to-dark-lighter text-center shadow-2xl mt-24 rounded-2xl relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none"></div>

				<div className="container mx-auto px-6 sm:px-8 md:px-12 relative">
					<h3 className="text-3xl sm:text-4xl font-extrabold text-primary mb-4 animate-fadeInUp">Stay Updated!</h3>
					<p className="text-gray-400 mb-8 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">Subscribe to our newsletter and get the latest features, tips, and updates straight to your inbox.</p>

					<form className="flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto animate-fadeInUp delay-200">
						<div className="relative w-full sm:flex-1">
							<input
								type="email"
								id="newsletter-email"
								placeholder=" "
								className="peer w-full px-4 pt-6 pb-2 rounded-xl bg-dark text-gray-200 placeholder-transparent 
						focus:outline-none focus:ring-2 focus:ring-primary transition shadow-lg"
							/>
							<label
								htmlFor="newsletter-email"
								className="absolute left-4 top-3 text-gray-400 text-sm transition-all duration-200
						peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base 
						peer-focus:top-2 peer-focus:text-primary peer-focus:text-sm">
								Enter your email
							</label>
						</div>

						<button
							type="submit"
							className="w-full sm:w-auto px-8 py-3 rounded-xl bg-primary text-dark font-semibold 
					shadow-lg hover:shadow-xl hover:bg-primaryLight hover:scale-105 transition transform duration-200">
							Subscribe
						</button>
					</form>
				</div>
			</section>
		</div>
	);
};

export default Home;
