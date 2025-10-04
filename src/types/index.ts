export interface Card {
	id: string;
	title: string;
	description: string;
	status: "todo" | "inprogress" | "done";
	createdAt: string;
}

export interface Board {
	id: string;
	title: string;
	cards: Card[];
}

export interface Rootstate {
	boards: {
		items: Record<string, Board>;
		loading: boolean;
		error: string | null;
	};
}
