import { Shield, User, AlertTriangle, RefreshCw } from "lucide-react";

const Terms = () => {
	return (
		<div className="container mx-auto px-6 py-12 text-gray-300">
			<div className="max-w-4xl mx-auto">
				{/* Header */}
				<header className="mb-10 text-center">
					<h1 className="text-4xl font-bold text-primary mb-3">Terms of Service</h1>
					<p className="text-gray-400">Please read these terms carefully before using MyBoards.</p>
				</header>

				{/* Terms Sections */}
				<div className="space-y-8">
					<section className="bg-dark-light p-6 rounded-2xl shadow-md border border-dark-lighter flex gap-4">
						<Shield className="w-8 h-8 text-primary shrink-0" />
						<div>
							<h2 className="text-xl font-semibold text-primary mb-2">1. Use of Service</h2>
							<p>MyBoards is provided for managing tasks and projects. You agree not to misuse the service, attempt to disrupt its functionality, or use it for unlawful purposes.</p>
						</div>
					</section>

					<section className="bg-dark-light p-6 rounded-2xl shadow-md border border-dark-lighter flex gap-4">
						<User className="w-8 h-8 text-primary shrink-0" />
						<div>
							<h2 className="text-xl font-semibold text-primary mb-2">2. Accounts</h2>
							<p>You are responsible for maintaining the confidentiality of your account and any activity that occurs under it.</p>
						</div>
					</section>

					<section className="bg-dark-light p-6 rounded-2xl shadow-md border border-dark-lighter flex gap-4">
						<AlertTriangle className="w-8 h-8 text-primary shrink-0" />
						<div>
							<h2 className="text-xl font-semibold text-primary mb-2">3. Limitation of Liability</h2>
							<p>MyBoards and its creators are not liable for any damages or losses resulting from the use of this service.</p>
						</div>
					</section>

					<section className="bg-dark-light p-6 rounded-2xl shadow-md border border-dark-lighter flex gap-4">
						<RefreshCw className="w-8 h-8 text-primary shrink-0" />
						<div>
							<h2 className="text-xl font-semibold text-primary mb-2">4. Changes to Terms</h2>
							<p>We may update these Terms from time to time. Continued use of MyBoards means you accept the updated terms.</p>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
};

export default Terms;
