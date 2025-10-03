import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

interface LoginProps {
	setIsLoggedIn: (value: boolean) => void;
}

const SignIn: React.FC<LoginProps> = ({ setIsLoggedIn }) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setError("");

		if (!username || !password) {
			setError("Please fill in all fields.");
			setTimeout(() => setError(""), 2000);
			return;
		}

		// Simple fake login
		setIsLoggedIn(true);
		localStorage.setItem("isLoggedIn", "true");
		localStorage.setItem("username", username);
		navigate("/boards");
	};

	return (
		<div
			className="flex justify-center items-center min-h-screen"
			style={{ backgroundColor: "var(--color-dark)" }}>
			<div
				className="rounded-xl shadow-xl p-10 w-96 flex flex-col items-center"
				style={{ backgroundColor: "var(--color-dark-lighter)" }}>
				<h2
					className="text-3xl font-bold text-primary text-center mb-8"
					style={{ color: "var(--color-primary)" }}>
					Sign In
				</h2>

				{error && <div className="mb-4 p-3 bg-red-600 text-white rounded text-center w-full">{error}</div>}

				<form
					className="flex flex-col gap-6 w-full"
					onSubmit={handleSubmit}>
					{/* Username */}
					<div className="relative w-full">
						<input
							type="text"
							id="username"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							className="peer block w-full rounded-lg border border-gray-700 px-4 pt-5 pb-2 text-white placeholder-transparent focus:outline-none focus:border-primary"
							placeholder="Username"
						/>
						<label
							htmlFor="username"
							className="absolute left-4 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-primary">
							Username
						</label>
					</div>

					{/* Password */}
					<div className="relative w-full">
						<input
							type={showPassword ? "text" : "password"}
							id="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="peer block w-full rounded-lg border border-gray-700 px-4 pt-5 pb-2 text-white placeholder-transparent focus:outline-none focus:border-primary"
							placeholder="Password"
						/>
						<label
							htmlFor="password"
							className="absolute left-4 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-primary">
							Password
						</label>
						<button
							type="button"
							onClick={() => setShowPassword(!showPassword)}
							className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition">
							{showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
						</button>
					</div>

					{/* Sign In button */}
					<button
						type="submit"
						className="w-full py-3 rounded-lg font-semibold transition transform hover:scale-105"
						style={{
							backgroundColor: "var(--color-primary)",
							color: "var(--color-dark)",
						}}>
						Sign In
					</button>
				</form>

				<p className="mt-4 text-gray-400 text-center text-sm">
					Don’t have an account?{" "}
					<Link
						to="/register"
						className="text-primary font-semibold hover:underline"
						style={{ color: "var(--color-primary)" }}>
						Create Account
					</Link>
				</p>
			</div>
		</div>
	);
};

export default SignIn;
