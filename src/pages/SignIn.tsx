import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

interface LoginProps {
	setIsLoggedIn: (value: boolean) => void;
}

const Login: React.FC<LoginProps> = ({ setIsLoggedIn }) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (username && password) {
			// Simple fake login
			setIsLoggedIn(true);
			localStorage.setItem("isLoggedIn", "true");
			localStorage.setItem("username", username);
			navigate("/boards");
		} else {
			alert("Please enter username and password");
		}
	};

	return (
		<div className="flex justify-center items-center min-h-screen bg-dark">
			<div className="bg-dark-lighter rounded-xl shadow-lg p-10 w-96">
				<h2 className="text-3xl font-bold text-primary text-center mb-6">Sign In</h2>

				<form
					className="flex flex-col gap-4"
					onSubmit={handleSubmit}>
					<input
						type="text"
						placeholder="Username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						className="p-3 rounded-lg border border-gray-700 bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:border-primary"
					/>

					<input
						type="password"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className="p-3 rounded-lg border border-gray-700 bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:border-primary"
					/>

					<button
						type="submit"
						className="bg-primary text-gray-900 font-semibold py-3 rounded-lg hover:opacity-90 transition">
						Sign In
					</button>
				</form>

				<p className="mt-4 text-gray-400 text-center text-sm">
					Don’t have an account?{" "}
					<Link
						to="/register"
						className="text-primary text-sm font-semibold hover:underline">
						Create Account
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Login;
