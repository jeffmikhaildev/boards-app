import { Mail, Phone, Github, Linkedin, Twitter, Facebook } from "lucide-react";

const teamMembers = [
	{
		name: "Jeff Mikhail",
		role: "Founder & Developer",
		img: "https://i.pravatar.cc/150?img=12",
		socials: {
			mail: "mailto:jeff@example.com",
			phone: "tel:+639123456789",
			github: "https://github.com/jeffmikhail",
			linkedin: "https://linkedin.com/in/jeffmikhail",
			twitter: "https://twitter.com/jeffmikhail",
			facebook: "https://facebook.com/jeffmikhail",
		},
	},
	{
		name: "John Doe",
		role: "Project Manager",
		img: "https://i.pravatar.cc/150?img=52",
		socials: {
			mail: "mailto:juan@example.com",
			phone: "tel:+639111111111",
			github: "https://github.com/juantamad",
			linkedin: "https://linkedin.com/in/juantamad",
			twitter: "https://twitter.com/juantamad",
			facebook: "https://facebook.com/juantamad",
		},
	},
	{
		name: "Jane Doe",
		role: "UI/UX Designer",
		img: "https://i.pravatar.cc/150?img=24",
		socials: {
			mail: "mailto:jane@example.com",
			phone: "tel:+639222222222",
			github: "https://github.com/janedoe",
			linkedin: "https://linkedin.com/in/janedoe",
			twitter: "https://twitter.com/janedoe",
			facebook: "https://facebook.com/janedoe",
		},
	},
];

const About = () => {
	return (
		<section className="container mx-auto px-6 py-16 text-gray-200 space-y-16">
			{/* Header */}
			<div className="text-center space-y-4">
				<h1 className="text-4xl md:text-5xl font-bold text-primary">About MyBoards</h1>
				<p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
					MyBoards is a modern kanban-style task and project management tool designed to help individuals and teams stay productive. With a clean interface, flexible workflows, and collaboration features, MyBoards makes it easier to organize ideas, manage tasks, and achieve goals.
				</p>
			</div>

			{/* Mission / Vision / Values */}
			<div className="grid md:grid-cols-3 gap-8">
				{[
					{
						title: "Our Mission",
						desc: "Empower individuals and teams with tools that simplify work, encourage collaboration, and boost productivity.",
					},
					{
						title: "Our Vision",
						desc: "Become the go-to lightweight project management app that adapts to personal and professional workflows.",
					},
					{
						title: "Our Values",
						desc: "Simplicity, collaboration, and continuous improvement — ensuring a seamless experience for every user.",
					},
				].map((item, idx) => (
					<div
						key={idx}
						className="bg-dark-light rounded-xl p-6 shadow-lg hover:shadow-2xl transition duration-300">
						<h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
						<p className="text-gray-400">{item.desc}</p>
					</div>
				))}
			</div>

			{/* Team Section */}
			<div>
				<h2 className="text-3xl font-bold text-primary mb-8 text-center">Meet Our Team</h2>
				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
					{teamMembers.map((member, idx) => (
						<div
							key={idx}
							className="bg-dark-light p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 text-center">
							<img
								src={member.img}
								alt={member.name}
								className="w-28 h-28 mx-auto rounded-full mb-4 object-cover border-2 border-primary"
							/>
							<h3 className="text-xl font-semibold text-white">{member.name}</h3>
							<p className="text-gray-400 mb-4">{member.role}</p>

							{/* Social Icons */}
							<div className="flex justify-center gap-4 text-primary flex-wrap">
								<a
									className="p-2 rounded-full bg-dark-lighter text-gray-400 hover:text-primary transition"
									href={member.socials.facebook}
									target="_blank"
									rel="noreferrer">
									<Facebook className="size-5" />
								</a>
								<a
									className="p-2 rounded-full bg-dark-lighter text-gray-400 hover:text-primary transition"
									href={member.socials.mail}
									target="_blank"
									rel="noreferrer">
									<Mail className="size-5" />
								</a>
								<a
									className="p-2 rounded-full bg-dark-lighter text-gray-400 hover:text-primary transition"
									href={member.socials.phone}>
									<Phone className="size-5" />
								</a>
								<a
									className="p-2 rounded-full bg-dark-lighter text-gray-400 hover:text-primary transition"
									href={member.socials.github}
									target="_blank"
									rel="noreferrer">
									<Github className="size-5" />
								</a>
								<a
									className="p-2 rounded-full bg-dark-lighter text-gray-400 hover:text-primary transition"
									href={member.socials.linkedin}
									target="_blank"
									rel="noreferrer">
									<Linkedin className="size-5" />
								</a>
								<a
									className="p-2 rounded-full bg-dark-lighter text-gray-400 hover:text-primary transition"
									href={member.socials.twitter}
									target="_blank"
									rel="noreferrer">
									<Twitter className="size-5" />
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default About;
