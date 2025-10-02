const About = () => {
	return (
		<section className="container mx-auto px-6 py-16 text-gray-200 space-y-8">
			<h1 className="text-4xl font-bold text-primary">About MyBoards</h1>
			<p className="text-lg text-gray-400 max-w-3xl">
				MyBoards is a modern kanban-style task and project management tool designed to help individuals and teams stay productive. With a clean interface, flexible workflows, and collaboration features, MyBoards makes it easier to organize ideas, manage tasks, and achieve goals.
			</p>

			<div className="grid md:grid-cols-3 gap-8">
				<div className="bg-dark-light rounded-lg p-6 shadow hover:shadow-lg transition">
					<h3 className="text-xl font-semibold text-primary mb-2">Our Mission</h3>
					<p className="text-gray-400">To empower individuals and teams with tools that simplify work, encourage collaboration, and boost productivity.</p>
				</div>
				<div className="bg-dark-light rounded-lg p-6 shadow hover:shadow-lg transition">
					<h3 className="text-xl font-semibold text-primary mb-2">Our Vision</h3>
					<p className="text-gray-400">To become the go-to lightweight project management app that adapts to both personal and professional workflows.</p>
				</div>
				<div className="bg-dark-light rounded-lg p-6 shadow hover:shadow-lg transition">
					<h3 className="text-xl font-semibold text-primary mb-2">Our Values</h3>
					<p className="text-gray-400">Simplicity, collaboration, and continuous improvement — ensuring a seamless experience for every user.</p>
				</div>
			</div>
		</section>
	);
};

export default About;
