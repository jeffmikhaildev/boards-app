import { Layout, Plus, FolderOpen } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { Rootstate } from "../types";
import { createBoard, setBoards } from "../store/boardsSlice";
import { toast } from "react-toastify";

const BoardsList = () => {
	const [newBoardTitle, setNewBoardTitle] = useState("");
	const [isCreatingBoard, setIsCreatingBoard] = useState(false);

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const boards = useSelector((state: Rootstate) => state.boards.items);

	// --- Ref for input to focus automatically
	const inputRef = useRef<HTMLInputElement>(null);

	// --- Focus input when form appears
	useEffect(() => {
		if (isCreatingBoard && inputRef.current) {
			inputRef.current.focus();
		}
	}, [isCreatingBoard]);

	// --- Load boards from localStorage once on mount
	useEffect(() => {
		const storedBoards = localStorage.getItem("boards");
		if (storedBoards) {
			dispatch(setBoards(JSON.parse(storedBoards)));
		}
	}, [dispatch]);

	// --- Save boards to localStorage whenever they change
	useEffect(() => {
		localStorage.setItem("boards", JSON.stringify(boards));
	}, [boards]);

	const handleCreateBoard = () => {
		if (!newBoardTitle.trim()) return;

		const id = crypto.randomUUID();
		dispatch(createBoard({ id, title: newBoardTitle }));

		setNewBoardTitle("");
		setIsCreatingBoard(false);
		toast.success("Board created successfully!");
		navigate(`/boards/`);
	};

	return (
		<section className="flex flex-col gap-20">
			{/* Header */}
			<div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
				<h1 className="text-4xl sm:text-5xl font-extrabold text-primary text-center sm:text-left tracking-tight">Organize Your Projects</h1>

				<button
					onClick={() => setIsCreatingBoard(true)}
					className="flex items-center justify-center gap-2 px-5 py-3 rounded-md border border-primary text-primary font-semibold hover:bg-primary hover:text-dark transition-colors focus:outline-none">
					<Plus className="w-5 h-5" /> New Board
				</button>
			</div>

			{/* Create Board Form */}
			{isCreatingBoard && (
				<form
					onSubmit={(e) => {
						e.preventDefault();
						handleCreateBoard();
					}}
					className="flex flex-col gap-4 max-w-screen-500px">
					<input
						type="text"
						placeholder="Board Title"
						ref={inputRef}
						className="bg-primary text-dark px-4 py-2 rounded-sm placeholder:text-gray-600 outline-none"
						onChange={(e) => setNewBoardTitle(e.target.value)}
						value={newBoardTitle}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								e.preventDefault();
								handleCreateBoard();
							}
						}}
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

			{/* Boards Grid */}
			<div className="grid gap-4 grid-cols-1 500px:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{Object.values(boards).length === 0 ? (
					<div className="col-span-full flex flex-col items-center justify-center py-12 text-gray-400 gap-4">
						<FolderOpen className="w-12 h-12 text-primary" />
						<p className="text-lg font-medium">No boards yet</p>
						<p className="text-sm">Start by creating a new project.</p>
					</div>
				) : (
					Object.values(boards).map((board) => (
						<div
							key={board.id}
							onClick={() => navigate(`/boards/${board.id}`)}
							className="cursor-pointer bg-primary text-dark rounded-sm px-6 py-8 flex flex-col items-center gap-4">
							<div className="flex flex-col gap-4 items-center">
								<Layout className="size-8" />
								<h2 className="text-xl font-semibold">{board.title}</h2>
							</div>
							<p>{board.cards.length} Cards</p>
						</div>
					))
				)}
			</div>
		</section>
	);
};

export default BoardsList;
