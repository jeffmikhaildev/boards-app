import { useDispatch, useSelector } from "react-redux";
import type { Card, Rootstate } from "../types";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import { addCard, deleteBoard } from "../store/boardsSlice";

const BoardDetails = () => {
	const [newCardTitle, setNewCardTitle] = useState("");
	const [isCreatingCard, setIsCreatingCard] = useState(false);

	const navigate = useNavigate();

	// *** REDUX
	const { boardId } = useParams();
	const dispatch = useDispatch();
	const board = useSelector((state: Rootstate) => (boardId ? state.boards.items[boardId] : null));

	const handleAddCard = () => {
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
		}
	};

	const handleDeleteBoard = () => {
		if (window.confirm("Are you sure you want to delete this board?")) {
			dispatch(deleteBoard(boardId!));

			navigate("/boards");
		}
	};

	const columns = [
		{ id: "todo", title: "To Do" },
		{ id: "inprogress", title: "In Progress" },
		{ id: "done", title: "Done" },
	];

	return !board ? (
		<section className="grid justify-center gap-8">
			<h1 className="text-2xl text-primary font-bold text-center">Board Not Found</h1>
			<button
				className="border border-primary px-4 py-2 rounded-sm"
				onClick={() => navigate("/boards")}>
				Back to Boards
			</button>
		</section>
	) : (
		<section className="flex flex-col gap-10">
			<button
				className="p-2 bg-primary rounded-full w-12 h-12 flex items-center justify-center shadow-md hover:bg-primaryLight transition"
				onClick={() => navigate("/boards")}>
				<ArrowLeft />
			</button>

			<div className="flex flex-col gap-6 md:flex-row md:justify-between md:items-center">
				<div className="flex flex-col gap-6 items-start">
					<h1 className="text-4xl font-bold text-primary text-center">{board.title}</h1>
				</div>

				<div className="flex flex-col gap-4 *:grow *:px-4 *:py-2 *:rounded-sm *:border *:border-primary *:flex *:gap-4 *:justify-center 500px:flex-row md:self-center">
					<button onClick={() => setIsCreatingCard(true)}>
						<Plus /> Add Card
					</button>
					<button onClick={handleDeleteBoard}>
						<Trash2 /> Delete Board
					</button>
				</div>
			</div>

			{/* CARD FORM */}
			{isCreatingCard && (
				<form
					onSubmit={handleAddCard}
					className="flex flex-col gap-4 max-w-screen-500px">
					<input
						className="bg-primary text-dark px-4 py-2 rounded-sm placeholder:text-gray-600 outline-none"
						type="text"
						placeholder="Card Title"
						onChange={(e) => setNewCardTitle(e.target.value)}
						value={newCardTitle}
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

			{/* CARDS */}
			<div className="grid gap-4 grid-cols-1 500px:grid-cols-2 md:grid-cols-3">
				{columns.map((column) => (
					<div
						key={column.id}
						className="bg-dark-lighter p-6 rounded-sm">
						<h2 className="text-2xl font-extrabold text-primary mb-4">{column.title}</h2>

						<div className="flex flex-wrap gap-2 *:bg-primary-light *:text-dark *:p-4 *:rounded-sm *:space-y-2">
							{board.cards
								.filter((card) => card.status === column.id)
								.map((card) => (
									// *** CARD
									<div key={card.id}>
										<h3 className="font-bold">{card.title}</h3>
										<p className="text-sm text-dark-light">{new Date(card.createdAt).toLocaleDateString()}</p>
									</div>
								))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default BoardDetails;
