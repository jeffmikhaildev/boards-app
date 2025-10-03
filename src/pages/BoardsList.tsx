import { Layout, Plus } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BoardsList = () => {
	const [newBoardTitle, setNewBoardTitle] = useState("");
	const [isCreatingBoard, setIsCreatingBoard] = useState(false);

	const navigate = useNavigate();

	const handleCreateBoard = () => {
		if (newBoardTitle.trim()) {
			const id = crypto.randomUUID();

			// TODO: send title and id to Redux

			setNewBoardTitle("");
			setIsCreatingBoard(false);
			navigate(`/boards/${id}`);
		}
	};

	return (
		<section className="flex flex-col gap-20">
			<div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
				<h1 className="text-4xl sm:text-5xl font-extrabold text-primary text-center sm:text-left tracking-tight">Organize Your Projects</h1>

				<button
					onClick={() => setIsCreatingBoard(true)}
					className="flex items-center justify-center gap-2 px-5 py-3 rounded-md border border-primary text-primary font-semibold hover:bg-primary hover:text-dark transition-colors focus:outline-none">
					<Plus className="w-5 h-5" /> New Board
				</button>
			</div>

			{isCreatingBoard && (
				<form
					onSubmit={handleCreateBoard}
					className="flex flex-col gap-4 max-w-screen-500px">
					<input
						type="text"
						placeholder="Board Title"
						className="bg-primary text-dark px-4 py-2 rounded-sm placeholder:text-gray-600 outline-none"
						onChange={(e) => setNewBoardTitle(e.target.value)}
						value={newBoardTitle}
					/>
					<div className="flex gap-2 *:grow *:px-4 *:py-2 *:rounded-sm *:border *:border-primary">
						<button
							type="button"
							onClick={() => setIsCreatingBoard(false)}>
							Cancel
						</button>
						<button type="submit">Create</button>
					</div>
				</form>
			)}

			<div className="grid gap-4 grid-cols-1 500px:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				<div className="cursor-pointer bg-primary text-dark rounded-sm px-6 py-8 flex flex-col items-center gap-4">
					<div className="flex flex-col gap-4 items-center">
						<Layout className="size-8" />
						<h2 className="text-xl font-semibold">Board Title</h2>
					</div>

					<p>2 Cards</p>
				</div>
			</div>
		</section>
	);
};

export default BoardsList;
