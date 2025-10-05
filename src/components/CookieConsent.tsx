import { useState, useEffect } from "react";

const COOKIE_KEY = "user_cookie_consent";

const CookieConsent = () => {
	const [show, setShow] = useState(false);

	useEffect(() => {
		const consent = localStorage.getItem(COOKIE_KEY);
		if (!consent) setShow(true); // show banner if no consent stored
	}, []);

	const handleAccept = () => {
		localStorage.setItem(COOKIE_KEY, "accepted");
		setShow(false);
	};

	const handleReject = () => {
		localStorage.setItem(COOKIE_KEY, "rejected");
		setShow(false);
	};

	if (!show) return null;

	return (
		<div className="fixed bottom-0 left-0 w-full bg-dark-light text-gray-200 p-4 sm:p-6 shadow-lg z-50 animate-fadeInUp flex flex-col sm:flex-row items-center justify-between gap-4">
			<p className="text-sm sm:text-base flex-1">We use cookies to enhance your experience, analyze traffic, and show personalized content.</p>
			<div className="flex gap-2 sm:gap-4">
				<button
					onClick={handleReject}
					className="px-4 py-2 rounded-xl border border-gray-500 hover:bg-gray-700 transition">
					Reject
				</button>
				<button
					onClick={handleAccept}
					className="px-4 py-2 rounded-xl bg-primary text-dark font-semibold hover:bg-primaryLight transition">
					Accept All
				</button>
			</div>
		</div>
	);
};

export default CookieConsent;
