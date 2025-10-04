import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Board, Card } from "../types";

interface BoardsState {
	items: Record<string, Board>;
	loading: boolean;
	error: string | null;
}

// --- Load initial state from localStorage
const storedBoards = localStorage.getItem("boards");

const initialState: BoardsState = {
	items: storedBoards ? JSON.parse(storedBoards) : {},
	loading: false,
	error: null,
};

const boardsSlice = createSlice({
	name: "boards",
	initialState,
	reducers: {
		createBoard: (state, action: PayloadAction<{ id: string; title: string }>) => {
			state.items[action.payload.id] = {
				id: action.payload.id,
				title: action.payload.title,
				cards: [],
			};
			localStorage.setItem("boards", JSON.stringify(state.items)); // save immediately
		},

		setBoards: (state, action: PayloadAction<Record<string, Board>>) => {
			state.items = action.payload;
			localStorage.setItem("boards", JSON.stringify(state.items));
		},

		addCard: (state, action: PayloadAction<{ boardId: string; card: Card }>) => {
			const board = state.items[action.payload.boardId];
			if (board) {
				board.cards.push(action.payload.card);
				localStorage.setItem("boards", JSON.stringify(state.items));
			}
		},

		updateCard: (state, action: PayloadAction<{ boardId: string; card: Card }>) => {
			const board = state.items[action.payload.boardId];
			if (board) {
				const index = board.cards.findIndex((c) => c.id === action.payload.card.id);
				if (index !== -1) {
					board.cards[index] = action.payload.card;
					localStorage.setItem("boards", JSON.stringify(state.items));
				}
			}
		},

		deleteBoard: (state, action: PayloadAction<string>) => {
			delete state.items[action.payload];
			localStorage.setItem("boards", JSON.stringify(state.items));
		},

		deleteCard: (state, action: PayloadAction<{ boardId: string; cardId: string }>) => {
			const board = state.items[action.payload.boardId];
			if (board) {
				board.cards = board.cards.filter((c) => c.id !== action.payload.cardId);
				localStorage.setItem("boards", JSON.stringify(state.items));
			}
		},
	},
});

export const { createBoard, addCard, deleteBoard, updateCard, deleteCard, setBoards } = boardsSlice.actions;
export default boardsSlice.reducer;
