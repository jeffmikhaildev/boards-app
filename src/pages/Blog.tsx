// src/pages/Blog.tsx
import { useState } from "react";

interface Post {
	id: number;
	title: string;
	excerpt: string;
	date: string;
	author: string;
	category: string;
	readingTime: string;
	image: string;
}

const Blog = () => {
	const [search, setSearch] = useState("");

	const posts: Post[] = [
		{
			id: 1,
			title: "Ideation & Planning",
			excerpt: "Brainstorming sessions, wireframes, and defining core features for MyBoards.",
			date: "October 2, 2025",
			author: "Team MyBoards",
			category: "Development",
			readingTime: "3 min read",
			image: "https://plus.unsplash.com/premium_photo-1661386006325-1473b33e9728?q=80&w=1685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			id: 2,
			title: "Design & Prototyping",
			excerpt: "Creating the UI/UX designs using Figma to ensure intuitive navigation and aesthetics.",
			date: "October 5, 2025",
			author: "Jeff Mikhail",
			category: "Design",
			readingTime: "4 min read",
			image: "https://plus.unsplash.com/premium_photo-1661421960963-33f7f625b7dd?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			id: 3,
			title: "Development & Testing",
			excerpt: "Coding the app, implementing Kanban functionality, and ensuring stability through tests.",
			date: "October 10, 2025",
			author: "Team MyBoards",
			category: "Development",
			readingTime: "5 min read",
			image: "https://images.unsplash.com/photo-1632910121591-29e2484c0259?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			id: 4,
			title: "Launch & Feedback",
			excerpt: "Deploying the app, gathering user feedback, and planning improvements for future updates.",
			date: "October 15, 2025",
			author: "Team MyBoards",
			category: "Launch",
			readingTime: "3 min read",
			image: "https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			id: 5,
			title: "Integrating Team Collaboration",
			excerpt: "Adding features for team collaboration, assigning tasks, and managing boards in real-time.",
			date: "October 18, 2025",
			author: "Jeff Mikhail",
			category: "Features",
			readingTime: "4 min read",
			image: "https://plus.unsplash.com/premium_photo-1683140548842-6b455f9b62df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fEludGVncmF0aW5nJTIwVGVhbSUyMENvbGxhYm9yYXRpb258ZW58MHx8MHx8fDA%3D",
		},
		{
			id: 6,
			title: "Boosting Productivity",
			excerpt: "Tips and techniques for using MyBoards effectively to maximize productivity.",
			date: "October 20, 2025",
			author: "Team MyBoards",
			category: "Productivity",
			readingTime: "5 min read",
			image: "https://images.unsplash.com/photo-1601485770245-9abd905abc7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEJvb3N0aW5nJTIwUHJvZHVjdGl2aXR5fGVufDB8fDB8fHww",
		},
		{
			id: 7,
			title: "Future Roadmap & Scaling",
			excerpt: "Planning new features, infrastructure scaling, and strategies to grow the MyBoards user base.",
			date: "October 25, 2025",
			author: "Team MyBoards",
			category: "Roadmap",
			readingTime: "6 min read",
			image: "https://images.unsplash.com/photo-1585924015977-32fd3839c21f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fEJvb3N0aW5nJTIwUHJvZHVjdGl2aXR5fGVufDB8fDB8fHww",
		},
	];

	const filteredPosts = posts.filter((post) => post.title.toLowerCase().includes(search.toLowerCase()) || post.excerpt.toLowerCase().includes(search.toLowerCase()));

	return (
		<section className="py-20 bg-dark-light text-gray-200 min-h-screen">
			<div className="container mx-auto px-6 md:px-12">
				{/* Header */}
				<header className="text-center mb-12">
					<h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">MyBoards Development Blog</h1>
					<p className="text-gray-400 max-w-2xl mx-auto">Explore the journey of building MyBoards: design decisions, development process, and lessons learned.</p>
				</header>

				{/* Search */}
				<div className="flex justify-center mb-12">
					<input
						type="text"
						placeholder="Search posts..."
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						className="w-full md:w-1/2 px-4 py-3 rounded-md bg-dark text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition"
					/>
				</div>

				{/* Featured Post */}
				{filteredPosts.length > 0 && (
					<div className="mb-16">
						<h2 className="text-2xl font-bold text-primary mb-6">Featured Post</h2>
						<div className="bg-dark rounded-2xl overflow-hidden shadow-xl md:flex flex-col md:flex-row">
							<img
								src={filteredPosts[0].image}
								alt={filteredPosts[0].title}
								className="md:w-1/2 w-full h-64 md:h-auto object-cover"
							/>
							<div className="p-6 md:p-10 flex flex-col justify-center">
								<span className="text-sm text-primary uppercase font-semibold mb-2">{filteredPosts[0].category}</span>
								<h3 className="text-2xl md:text-3xl font-bold mb-4">{filteredPosts[0].title}</h3>
								<p className="text-gray-400 mb-4">{filteredPosts[0].excerpt}</p>
								<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm text-gray-500 gap-2">
									<span>
										{filteredPosts[0].author} • {filteredPosts[0].date}
									</span>
									<span>{filteredPosts[0].readingTime}</span>
								</div>
								<div className="mt-6 inline-block px-5 py-2 bg-primary text-dark font-semibold rounded-md hover:bg-primaryLight transition text-center w-full sm:w-auto">Read More</div>
							</div>
						</div>
					</div>
				)}

				{/* Other Posts */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
					{filteredPosts.slice(1).map((post) => (
						<article
							key={post.id}
							className="bg-dark rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 overflow-hidden flex flex-col">
							<img
								src={post.image}
								alt={post.title}
								className="h-48 w-full object-cover"
							/>
							<div className="p-6 flex flex-col flex-1 justify-between">
								<div>
									<span className="text-xs uppercase text-primary font-semibold">{post.category}</span>
									<h2 className="text-xl font-bold text-primary mb-2 mt-1">{post.title}</h2>
									<p className="text-gray-400 text-sm mb-3">{post.excerpt}</p>
								</div>
								<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs text-gray-500 gap-2">
									<span>
										{post.author} • {post.date}
									</span>
									<span>{post.readingTime}</span>
								</div>
								<div className="mt-4 inline-block px-4 py-2 bg-primary text-dark font-semibold rounded-md hover:bg-primaryLight transition text-center w-full">Read More</div>
							</div>
						</article>
					))}
				</div>

				{/* Empty State */}
				{filteredPosts.length === 0 && <p className="text-center text-gray-400 mt-16 text-lg">No posts found. Try another search.</p>}
			</div>
		</section>
	);
};

export default Blog;
