import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "react-toastify";

const Contacts = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [status, setStatus] = useState<"idle" | "loading">("idle");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setStatus("loading");

		try {
			const res = await fetch("https://formspree.io/f/mzzjveoa", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ name, email, message }),
			});

			if (res.ok) {
				toast.success("Message sent successfully!");
				setName("");
				setEmail("");
				setMessage("");
			} else {
				toast.error("Something went wrong. Please try again.");
			}
		} catch {
			toast.error("Failed to send. Check your connection.");
		} finally {
			setStatus("idle");
		}
	};

	return (
		<section className="container mx-auto px-6 py-16 text-gray-200 space-y-16">
			{/* Header */}
			<div className="text-center space-y-4">
				<h1 className="text-4xl md:text-5xl font-bold text-primary animate-fadeInUp">Contact Us</h1>
				<p className="text-gray-400 max-w-2xl mx-auto animate-fadeInUp delay-100">Have questions, feedback, or just want to connect? Reach out using the details below or send us a quick message.</p>
			</div>

			{/* Form + Map */}
			<div className="grid lg:grid-cols-2 gap-12 items-start">
				{/* Contact Form */}
				<form
					onSubmit={handleSubmit}
					className="rounded-2xl p-8 md:p-10 shadow-xl space-y-6 animate-fadeInUp"
					style={{ backgroundColor: "var(--color-dark-light)" }}>
					<div className="grid md:grid-cols-2 gap-4">
						{/* Name */}
						<div className="relative">
							<input
								type="text"
								id="name"
								placeholder="Your Name"
								value={name}
								onChange={(e) => setName(e.target.value)}
								required
								className="peer w-full px-4 pt-5 pb-2 rounded-lg border border-gray-700 bg-dark text-white placeholder-transparent focus:outline-none focus:border-primary transition"
							/>
							<label
								htmlFor="name"
								className="absolute left-4 top-2 text-gray-400 text-sm transition-all
											peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base
											peer-focus:top-2 peer-focus:text-sm peer-focus:text-primary">
								Your Name
							</label>
						</div>

						{/* Email */}
						<div className="relative">
							<input
								type="email"
								id="email"
								placeholder="Your Email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
								className="peer w-full px-4 pt-5 pb-2 rounded-lg border border-gray-700 bg-dark text-white placeholder-transparent focus:outline-none focus:border-primary transition"
							/>
							<label
								htmlFor="email"
								className="absolute left-4 top-2 text-gray-400 text-sm transition-all
											peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base
											peer-focus:top-2 peer-focus:text-sm peer-focus:text-primary">
								Your Email
							</label>
						</div>
					</div>

					{/* Message */}
					<div className="relative">
						<textarea
							id="message"
							placeholder="Your Message"
							rows={5}
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							required
							className="peer w-full px-4 pt-5 pb-2 rounded-lg border border-gray-700 bg-dark text-white placeholder-transparent focus:outline-none focus:border-primary transition"></textarea>
						<label
							htmlFor="message"
							className="absolute left-4 top-2 text-gray-400 text-sm transition-all
										peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base
										peer-focus:top-2 peer-focus:text-sm peer-focus:text-primary">
							Your Message
						</label>
					</div>

					{/* Send Button */}
					<button
						type="submit"
						disabled={status === "loading"}
						className="w-full md:w-auto px-8 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
						style={{
							backgroundColor: "var(--color-primary)",
							color: "var(--color-dark)",
						}}>
						{status === "loading" ? "Sending..." : "Send Message"}
					</button>
				</form>

				{/* Map */}
				<div className="rounded-2xl overflow-hidden shadow-xl animate-fadeInUp delay-200 h-full">
					<iframe
						title="map"
						width="100%"
						height="100%"
						style={{ border: 0 }}
						loading="lazy"
						allowFullScreen
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3852.2152022110635!2d120.3493!3d15.8949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3393e0d3e77bdb2f%3A0x32c1c77c5b5c78d1!2sPangasinan%2C%20Philippines!5e0!3m2!1sen!2sph!4v1696500000000!5m2!1sen!2sph"></iframe>
				</div>
			</div>

			{/* Contact Info Cards */}
			<div className="grid md:grid-cols-3 gap-8">
				{[
					{
						icon: <Mail className="w-6 h-6" />,
						title: "Email",
						desc: "jeffmikhail.dev@gmail.com",
					},
					{
						icon: <Phone className="w-6 h-6" />,
						title: "Phone",
						desc: "+63 9219126247",
					},
					{
						icon: <MapPin className="w-6 h-6" />,
						title: "Location",
						desc: "Pangasinan, Philippines",
					},
				].map((item, idx) => (
					<div
						key={idx}
						className="flex items-start gap-4 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 animate-fadeInUp"
						style={{ backgroundColor: "var(--color-dark-light)" }}>
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
