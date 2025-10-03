import { useState, useEffect } from "react";

const themes = {
	gold: { name: "Gold", primary: "#ffd700", primaryDark: "#b8860b", primaryLight: "#fff8b5" },
	green: { name: "Green", primary: "#16a34a", primaryDark: "#166534", primaryLight: "#4ade80" },
	red: { name: "Red", primary: "#ef4444", primaryDark: "#b91c1c", primaryLight: "#fca5a5" },
	blue: { name: "Blue", primary: "#1e40af", primaryDark: "#1e3a8a", primaryLight: "#93c5fd" },
	purple: { name: "Purple", primary: "#8b5cf6", primaryDark: "#5b21b6", primaryLight: "#c4b5fd" },
	orange: { name: "Orange", primary: "#f59e0b", primaryDark: "#b45309", primaryLight: "#fcd34d" },
	teal: { name: "Teal", primary: "#0d9488", primaryDark: "#115e59", primaryLight: "#5eead4" },
	pink: { name: "Pink", primary: "#ec4899", primaryDark: "#9d174d", primaryLight: "#f9a8d4" },
	cyan: { name: "Cyan", primary: "#06b6d4", primaryDark: "#0e7490", primaryLight: "#67e8f9" },
	lime: { name: "Lime", primary: "#84cc16", primaryDark: "#65a30d", primaryLight: "#bef264" },
	indigo: { name: "Indigo", primary: "#6366f1", primaryDark: "#4338ca", primaryLight: "#a5b4fc" },
	rose: { name: "Rose", primary: "#f43f5e", primaryDark: "#be123c", primaryLight: "#fda4af" },
	light: { name: "Light", primary: "#ffffff", primaryDark: "#d1d5db", primaryLight: "#f9fafb" },
	amber: { name: "Amber", primary: "#f59e0b", primaryDark: "#b45309", primaryLight: "#fcd34d" },
	sky: { name: "Sky", primary: "#0ea5e9", primaryDark: "#0369a1", primaryLight: "#7dd3fc" },
	violet: { name: "Violet", primary: "#8b5cf6", primaryDark: "#5b21b6", primaryLight: "#c4b5fd" },
	stone: { name: "Stone", primary: "#78716c", primaryDark: "#3f3f46", primaryLight: "#a8a29e" },
	fuchsia: { name: "Fuchsia", primary: "#d946ef", primaryDark: "#a21caf", primaryLight: "#f5d0fe" },
	emerald: { name: "Emerald", primary: "#10b981", primaryDark: "#047857", primaryLight: "#6ee7b7" },
	amberDark: { name: "AmberDark", primary: "#d97706", primaryDark: "#b45309", primaryLight: "#fcd34d" },
	coral: { name: "Coral", primary: "#f97316", primaryDark: "#c2410c", primaryLight: "#fdba74" },
	lavender: { name: "Lavender", primary: "#c084fc", primaryDark: "#7c3aed", primaryLight: "#e9d5ff" },
	mint: { name: "Mint", primary: "#3eb489", primaryDark: "#2c8c6f", primaryLight: "#8de3c7" }, // new
	peach: { name: "Peach", primary: "#ffad8f", primaryDark: "#e07c5d", primaryLight: "#ffd3c2" }, // new
};

const Settings = () => {
	const defaultTheme = "light";
	const [selectedTheme, setSelectedTheme] = useState(localStorage.getItem("theme") || defaultTheme);

	useEffect(() => {
		applyTheme(selectedTheme);
	}, [selectedTheme]);

	const applyTheme = (themeKey: string) => {
		const theme = themes[themeKey as keyof typeof themes] || themes[defaultTheme];
		Object.entries(theme).forEach(([key, value]) => {
			if (key !== "name") {
				document.documentElement.style.setProperty(`--color-${key.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase())}`, value as string);
			}
		});
		setSelectedTheme(themeKey);
		localStorage.setItem("theme", themeKey);
	};

	return (
		<div className="container mx-auto p-6 max-w-4xl">
			<h1 className="text-3xl font-bold text-primary mb-6">Choose Your Theme</h1>
			<div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
				{Object.entries(themes).map(([key, theme]) => (
					<button
						key={key}
						onClick={() => applyTheme(key)}
						className={`
              flex flex-col items-center justify-center p-3 rounded-xl shadow-md transition-all
              hover:scale-105 hover:shadow-lg
              border-2 ${selectedTheme === key ? "border-primary" : "border-transparent"}
            `}
						style={{ backgroundColor: theme.primaryLight }}>
						<div
							className="w-10 h-10 rounded-full mb-2 shadow-inner"
							style={{ backgroundColor: theme.primary }}
						/>
						<span
							className="text-sm font-medium"
							style={{ color: selectedTheme === key ? theme.primaryDark : "#333" }}>
							{theme.name}
						</span>
					</button>
				))}
			</div>
		</div>
	);
};

export default Settings;
