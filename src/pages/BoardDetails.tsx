import { useDispatch, useSelector } from "react-redux";
import type { Card, Rootstate } from "../types";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Plus, Trash2 } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { addCard, deleteBoard, updateCard } from "../store/boardsSlice";
import { toast } from "react-toastify";

const BoardDetails = () => {
	const [newCardTitle, setNewCardTitle] = useState("");
	const [isCreatingCard, setIsCreatingCard] = useState(false);
	const [showDeleteBoardModal, setShowDeleteBoardModal] = useState(false);

	const inputRef = useRef<HTMLInputElement>(null);
	const [draggedCard, setDraggedCard] = useState<Card | null>(null);

	const navigate = useNavigate();
	const { boardId } = useParams();
	const dispatch = useDispatch();

	const board = useSelector((state: Rootstate) => (boardId ? state.boards.items[boardId] : null));

	// Focus input when adding a card
	useEffect(() => {
		if (isCreatingCard && inputRef.current) inputRef.current.focus();
	}, [isCreatingCard]);

	// Drag & Drop handlers
	const handleDragStart = (card: Card) => setDraggedCard(card);
	const handleDragOver = (e: React.DragEvent) => e.preventDefault();
	const handleDrop = (status: Card["status"]) => {
		if (draggedCard && boardId && status !== draggedCard.status) {
			const updatedCard: Card = { ...draggedCard, status };
			dispatch(updateCard({ boardId, card: updatedCard }));
			setDraggedCard(null);
		}
	};

	// Add card
	const handleAddCard = (e?: React.FormEvent) => {
		if (e) e.preventDefault();
		if (newCardTitle.trim() && boardId) {
			const newCard: Card = {
				id: crypto.randomUUID(),
				title: newCardTitle,
				description: "",
				status: "todo",
				createdAt: new Date().toISOString(),
			};
			dispatch(addCard({ boardId, card: newCard }));
			setNewCardTitle("");
			setIsCreatingCard(false);
			toast.success("Card added successfully!");
		}
	};

	// Delete board
	const confirmDeleteBoard = () => {
		dispatch(deleteBoard(boardId!));
		setShowDeleteBoardModal(false);
		toast.success("Board deleted successfully!");
		navigate("/boards");
	};

	const columns = [
		{ id: "todo", title: "To Do" },
		{ id: "inprogress", title: "In Progress" },
		{ id: "done", title: "Done" },
	];

	if (!board) {
		return (
			<section className="grid justify-center gap-8">
				<h1 className="text-2xl text-primary font-bold text-center">Board Not Found</h1>
				<button
					className="border border-primary px-4 py-2 rounded-sm"
					onClick={() => navigate("/boards")}>
					Back to Boards
				</button>
			</section>
		);
	}

	return (
		<section className="flex flex-col gap-10">
			{/* Back Button */}
			<button
				className="p-2 bg-primary rounded-full w-12 h-12 flex items-center justify-center shadow-md hover:bg-primaryLight transition"
				onClick={() => navigate("/boards")}>
				<ArrowLeft />
			</button>

			{/* Header */}
			<div className="flex flex-col gap-6 md:flex-row md:justify-between md:items-center">
				<div className="flex flex-col gap-6 items-start">
					<h1 className="text-4xl font-bold text-primary text-center">{board.title}</h1>
				</div>

				<div className="flex flex-col gap-4 *:grow *:px-4 *:py-2 *:rounded-sm *:border *:border-primary *:flex *:gap-4 *:justify-center 500px:flex-row md:self-center">
					<button onClick={() => setIsCreatingCard(true)}>
						<Plus /> Add Card
					</button>
					<button onClick={() => setShowDeleteBoardModal(true)}>
						<Trash2 /> Delete Board
					</button>
				</div>
			</div>

			{/* Add Card Form */}
			{isCreatingCard && (
				<form
					onSubmit={handleAddCard}
					className="flex flex-col gap-4 max-w-screen-500px">
					<input
						ref={inputRef}
						type="text"
						placeholder="Card Title"
						className="bg-primary text-dark px-4 py-2 rounded-sm placeholder:text-gray-600 outline-none"
						onChange={(e) => setNewCardTitle(e.target.value)}
						value={newCardTitle}
						onKeyDown={(e) => e.key === "Enter" && handleAddCard()}
					/>
					<div className="flex gap-2 *:grow *:px-4 *:py-2 *:rounded-sm *:border *:border-primary">
						<button
							type="button"
							onClick={() => setIsCreatingCard(false)}>
							Cancel
						</button>
						<button type="submit">Add</button>
					</div>
				</form>
			)}

			{/* Cards Grid */}
			<div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
				{columns.map((column) => {
					const cardsInColumn = board.cards.filter((card) => card.status === column.id);

					return (
						<div
							key={column.id}
							onDragOver={handleDragOver}
							onDrop={() => handleDrop(column.id as Card["status"])}
							className={`flex flex-col gap-4 items-start bg-dark-lighter rounded-sm p-4 ${draggedCard ? "border-2 border-dashed border-primary/50" : ""}`}>
							<h2 className="text-2xl font-extrabold text-primary mb-2">{column.title}</h2>

							{cardsInColumn.length > 0 ? (
								<div className="flex flex-wrap gap-2 *:bg-primary-light *:text-dark *:py-2 *:px-4 *:rounded-sm *:space-y-2">
									{cardsInColumn.map((card) => (
										<div
											key={card.id}
											draggable
											onDragStart={() => handleDragStart(card)}
											className={`cursor-move ${draggedCard?.id === card.id ? "opacity-55" : ""}`}
											onClick={() => navigate(`/boards/${boardId}/card/${card.id}`)}>
											<h3 className="font-bold">{card.title}</h3>
											<p className="text-xs text-dark-light">
												{new Date(card.createdAt).toLocaleDateString("en-US", {
													month: "short",
													day: "2-digit",
													year: "numeric",
												})}
											</p>
										</div>
									))}
								</div>
							) : (
								<div className="flex flex-1 w-full flex-col items-center justify-center py-10 text-center">
									<p className="text-base font-medium text-gray-500 tracking-wide">No cards</p>
									<span className="text-xs text-gray-400 mt-1">Drag a card here or create a new one</span>
								</div>
							)}
						</div>
					);
				})}
			</div>

			{/* Delete Board Modal */}
			{showDeleteBoardModal && (
				<div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
					<div className="bg-dark rounded-md p-6 max-w-sm w-full flex flex-col gap-4 shadow-lg">
						<h2 className="text-xl font-bold text-primary">Delete Board</h2>
						<p>
							Are you sure you want to delete the board <span className="font-semibold">{board.title}</span>? This action cannot be undone.
						</p>
						<div className="flex justify-end gap-2 mt-4">
							<button
								className="px-4 py-2 rounded-md border border-primary text-primary hover:bg-primary hover:text-dark transition"
								onClick={() => setShowDeleteBoardModal(false)}>
								Cancel
							</button>
							<button
								className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 transition"
								onClick={confirmDeleteBoard}>
								Delete
							</button>
						</div>
					</div>
				</div>
			)}
		</section>
	);
};

export default BoardDetails;
