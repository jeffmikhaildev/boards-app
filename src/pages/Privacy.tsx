import { Lock, Eye, Database, RefreshCw } from "lucide-react";

const Privacy = () => {
	return (
		<div className="container mx-auto px-6 py-12 text-gray-300">
			<div className="max-w-4xl mx-auto">
				{/* Header */}
				<header className="mb-10 text-center">
					<h1 className="text-4xl font-bold text-primary mb-3">Privacy Policy</h1>
					<p className="text-gray-400">Your privacy is important to us. Here’s how we handle your information.</p>
				</header>

				{/* Policy Sections */}
				<div className="space-y-8">
					<section className="bg-dark-light p-6 rounded-2xl shadow-md border border-dark-lighter flex gap-4">
						<Database className="w-8 h-8 text-primary shrink-0" />
						<div>
							<h2 className="text-xl font-semibold text-primary mb-2">1. Information We Collect</h2>
							<p>We may collect personal details such as your name, email address, and usage data to improve the service.</p>
						</div>
					</section>

					<section className="bg-dark-light p-6 rounded-2xl shadow-md border border-dark-lighter flex gap-4">
						<Eye className="w-8 h-8 text-primary shrink-0" />
						<div>
							<h2 className="text-xl font-semibold text-primary mb-2">2. How We Use Information</h2>
							<p>Your data is used to provide, maintain, and improve MyBoards. We do not sell or rent your personal information to third parties.</p>
						</div>
					</section>

					<section className="bg-dark-light p-6 rounded-2xl shadow-md border border-dark-lighter flex gap-4">
						<Lock className="w-8 h-8 text-primary shrink-0" />
						<div>
							<h2 className="text-xl font-semibold text-primary mb-2">3. Data Security</h2>
							<p>We use reasonable security measures to protect your information, but no method is 100% secure.</p>
						</div>
					</section>

					<section className="bg-dark-light p-6 rounded-2xl shadow-md border border-dark-lighter flex gap-4">
						<RefreshCw className="w-8 h-8 text-primary shrink-0" />
						<div>
							<h2 className="text-xl font-semibold text-primary mb-2">4. Changes to Policy</h2>
							<p>We may update this Privacy Policy at any time. We encourage you to review it periodically.</p>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
};

export default Privacy;
