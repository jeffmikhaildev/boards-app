import { Mail, Phone, MapPin } from "lucide-react";

const Contacts = () => {
	return (
		<section className="container mx-auto px-6 py-16 text-gray-200 space-y-8">
			<h1 className="text-4xl font-bold text-primary">Contact Us</h1>
			<p className="text-lg text-gray-400 max-w-2xl">Have questions, feedback, or just want to connect? We'd love to hear from you! Reach out using the details below or send us a quick message.</p>

			{/* Contact Info */}
			<div className="grid md:grid-cols-3 gap-8">
				<div className="flex items-start gap-4">
					<Mail className="w-6 h-6 text-primary mt-1" />
					<div>
						<h3 className="text-lg font-semibold text-gray-100">Email</h3>
						<p className="text-gray-400">jeffmikhail.dev@gmail.com</p>
					</div>
				</div>
				<div className="flex items-start gap-4">
					<Phone className="w-6 h-6 text-primary mt-1" />
					<div>
						<h3 className="text-lg font-semibold text-gray-100">Phone</h3>
						<p className="text-gray-400">+63 9219126247</p>
					</div>
				</div>
				<div className="flex items-start gap-4">
					<MapPin className="w-6 h-6 text-primary mt-1" />
					<div>
						<h3 className="text-lg font-semibold text-gray-100">Location</h3>
						<p className="text-gray-400">Pangasinan, Philippines</p>
					</div>
				</div>
			</div>

			{/* Contact Form */}
			<form className="bg-dark-light rounded-lg p-8 shadow-md max-w-2xl space-y-4">
				<div className="grid md:grid-cols-2 gap-4">
					<input
						type="text"
						placeholder="Your Name"
						className="w-full px-4 py-2 rounded bg-dark border border-dark-lighter text-gray-200 placeholder-gray-500 focus:outline-none focus:border-primary"
					/>
					<input
						type="email"
						placeholder="Your Email"
						className="w-full px-4 py-2 rounded bg-dark border border-dark-lighter text-gray-200 placeholder-gray-500 focus:outline-none focus:border-primary"
					/>
				</div>
				<textarea
					placeholder="Your Message"
					rows={5}
					className="w-full px-4 py-2 rounded bg-dark border border-dark-lighter text-gray-200 placeholder-gray-500 focus:outline-none focus:border-primary"></textarea>
				<button
					type="submit"
					className="bg-primary text-dark px-6 py-3 rounded-md font-semibold hover:opacity-90 transition">
					Send Message
				</button>
			</form>
		</section>
	);
};

export default Contacts;
