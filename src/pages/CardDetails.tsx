import { useDispatch, useSelector } from "react-redux";
import type { Card, Rootstate } from "../types";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Save, Trash2 } from "lucide-react";
import { useState } from "react";
import { deleteCard, updateCard } from "../store/boardsSlice";
import { toast } from "react-toastify";

const CardDetails = () => {
	const { boardId = "", cardId = "" } = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const card = useSelector((state: Rootstate) => {
		const board = state.boards.items[boardId];
		if (!board) return undefined;
		return board.cards.find((c) => c.id === cardId);
	});

	const [title, setTitle] = useState(card?.title || "");
	const [description, setDescription] = useState(card?.description || "");
	const [status, setStatus] = useState<Card["status"]>(card?.status || "todo");
	const [showDeleteModal, setShowDeleteModal] = useState(false);

	const handleSave = () => {
		if (!card) return;
		const updatedCard: Card = {
			id: card.id,
			title,
			description,
			status,
			createdAt: card.createdAt,
		};
		dispatch(updateCard({ boardId, card: updatedCard }));
		toast.success("Card updated successfully!");
		navigate(`/boards/${boardId}`);
	};

	const handleDeleteCard = () => {
		dispatch(deleteCard({ boardId, cardId }));
		toast.success("Card deleted successfully!");
		setShowDeleteModal(false);
		navigate(`/boards/${boardId}`);
	};

	if (!card) {
		return (
			<section className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
				<h1 className="text-2xl font-bold text-primary">Card Not Found</h1>
				<button
					onClick={() => navigate(`/boards/${boardId}`)}
					className="px-4 py-2 border border-primary rounded-md hover:bg-primary hover:text-dark transition">
					Back to Board
				</button>
			</section>
		);
	}

	return (
		<section className="flex flex-col gap-8 max-w-4xl mx-auto px-4 py-6">
			{/* Back Button */}
			<button
				className="p-2 bg-primary rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-primaryLight transition"
				onClick={() => navigate(`/boards/${boardId}`)}>
				<ArrowLeft />
			</button>

			{/* Header and Actions */}
			<div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
				<h1 className="text-3xl md:text-4xl font-bold text-primary text-center md:text-left">{card.title}</h1>

				<div className="flex flex-col sm:flex-row gap-3">
					<button
						onClick={handleSave}
						className="flex items-center gap-2 px-4 py-2 bg-primary text-dark rounded-md shadow hover:bg-primaryLight transition">
						<Save /> Save Changes
					</button>
					<button
						onClick={() => setShowDeleteModal(true)}
						className="flex items-center gap-2 px-4 py-2 border border-red-500 text-red-500 rounded-md hover:bg-red-50 transition">
						<Trash2 /> Delete Card
					</button>
				</div>
			</div>

			{/* Form */}
			<form className="flex flex-col gap-4">
				<div className="flex flex-col gap-1">
					<label
						htmlFor="title"
						className="font-semibold text-primary">
						Title
					</label>
					<input
						type="text"
						id="title"
						className="bg-primary text-dark px-4 py-2 rounded-md placeholder:text-gray-500 outline-none w-full"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>

				<div className="flex flex-col gap-1">
					<label
						htmlFor="description"
						className="font-semibold text-primary">
						Description
					</label>
					<textarea
						id="description"
						className="bg-primary text-dark px-4 py-2 rounded-md placeholder:text-gray-500 outline-none h-48 w-full"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
				</div>

				<div className="flex flex-col gap-1">
					<label
						htmlFor="status"
						className="font-semibold text-primary">
						Status
					</label>
					<select
						name="status"
						id="status"
						className="bg-dark border border-primary text-primary px-4 py-2 rounded-sm outline-none focus:ring-2 focus:ring-primary"
						onChange={(e) => setStatus(e.target.value as Card["status"])}
						value={status}>
						<option
							className="bg-dark text-primary"
							value="todo">
							To Do
						</option>
						<option
							className="bg-dark text-primary"
							value="inprogress">
							In Progress
						</option>
						<option
							className="bg-dark text-primary"
							value="done">
							Done
						</option>
					</select>
				</div>

				<p className="text-sm font-medium text-primary">Created: {new Date(card.createdAt).toLocaleString()}</p>
			</form>

			{/* Delete Confirmation Modal */}
			{showDeleteModal && (
				<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
					<div className="bg-dark rounded-lg p-6 max-w-sm w-full flex flex-col gap-4 shadow-lg">
						<h2 className="text-xl font-bold text-primary">Delete Card</h2>
						<p>
							Are you sure you want to delete <span className="font-semibold">{card.title}</span>? This action cannot be undone.
						</p>
						<div className="flex justify-end gap-3 mt-4">
							<button
								onClick={() => setShowDeleteModal(false)}
								className="px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary hover:text-dark transition">
								Cancel
							</button>
							<button
								onClick={handleDeleteCard}
								className="px-4 py-2 border border-red-500 text-red-500 rounded-md hover:bg-red-50 transition">
								Delete
							</button>
						</div>
					</div>
				</div>
			)}
		</section>
	);
};

export default CardDetails;
