import { useState, useEffect } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contacts = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [isDisabled, setIsDisabled] = useState(true);

	useEffect(() => {
		setIsDisabled(!(name && email && message));
	}, [name, email, message]);

	return (
		<section className="container mx-auto px-6 py-16 text-gray-200 space-y-12">
			{/* Header */}
			<div className="text-center space-y-4">
				<h1 className="text-4xl md:text-5xl font-bold text-primary animate-fadeInUp">Contact Us</h1>
				<p className="text-gray-400 max-w-2xl mx-auto animate-fadeInUp delay-100">Have questions, feedback, or just want to connect? We'd love to hear from you! Reach out using the details below or send us a quick message.</p>
			</div>

			{/* Contact Form */}
			<form className="bg-dark-light rounded-2xl p-8 md:p-12 shadow-xl max-w-3xl mx-auto space-y-6 animate-fadeInUp delay-200">
				<div className="grid md:grid-cols-2 gap-4">
					<div className="relative">
						<input
							type="text"
							id="name"
							placeholder="Your Name"
							value={name}
							onChange={(e) => setName(e.target.value)}
							className="peer w-full px-4 pt-5 pb-2 rounded-lg border border-gray-700 bg-dark text-white placeholder-transparent focus:outline-none focus:border-primary transition"
						/>
						<label
							htmlFor="name"
							className="absolute left-4 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-primary">
							Your Name
						</label>
					</div>

					<div className="relative">
						<input
							type="email"
							id="email"
							placeholder="Your Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="peer w-full px-4 pt-5 pb-2 rounded-lg border border-gray-700 bg-dark text-white placeholder-transparent focus:outline-none focus:border-primary transition"
						/>
						<label
							htmlFor="email"
							className="absolute left-4 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-primary">
							Your Email
						</label>
					</div>
				</div>

				<div className="relative">
					<textarea
						id="message"
						placeholder="Your Message"
						rows={5}
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						className="peer w-full px-4 pt-5 pb-2 rounded-lg border border-gray-700 bg-dark text-white placeholder-transparent focus:outline-none focus:border-primary transition"></textarea>
					<label
						htmlFor="message"
						className="absolute left-4 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-primary">
						Your Message
					</label>
				</div>

				<button
					type="submit"
					disabled={isDisabled}
					className={`w-full md:w-auto px-6 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 ${isDisabled ? "bg-gray-700 cursor-not-allowed opacity-50" : "bg-primary text-dark "}`}>
					Send Message
				</button>
			</form>

			{/* Contact Info Cards */}
			<div className="grid md:grid-cols-3 gap-8">
				{[
					{
						icon: <Mail className="size-6" />,
						title: "Email",
						desc: "jeffmikhail.dev@gmail.com",
					},
					{
						icon: <Phone className="size-6" />,
						title: "Phone",
						desc: "+63 9219126247",
					},
					{
						icon: <MapPin className="size-6" />,
						title: "Location",
						desc: "Pangasinan, Philippines",
					},
				].map((item, idx) => (
					<div
						key={idx}
						className="flex items-start gap-4 p-6 rounded-xl bg-dark-light transition-all duration-300 animate-fadeInUp delay-[${idx * 100}]">
						<div className="flex-shrink-0 mt-1 text-primary">{item.icon}</div>
						<div>
							<h3 className="text-lg font-semibold text-white">{item.title}</h3>
							<p className="text-gray-400">{item.desc}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Contacts;
