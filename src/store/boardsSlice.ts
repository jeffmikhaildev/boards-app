import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Board, Card } from "../types";

interface BoardsState {
	items: Record<string, Board>;
	loading: boolean;
	error: string | null;
}

const initialState: BoardsState = {
	items: {},
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
		},

		addCard: (state, action: PayloadAction<{ boardId: string; card: Card }>) => {
			const board = state.items[action.payload.boardId];

			board.cards.push(action.payload.card);
		},

		deleteBoard: (state, action: PayloadAction<string>) => {
			delete state.items[action.payload];
		},
	},
});

export const { createBoard, addCard, deleteBoard } = boardsSlice.actions;

export default boardsSlice.reducer;
