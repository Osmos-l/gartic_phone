import { Player } from "./player";

export enum GameStatus {
    WAITING_PLAYERS = 1,
    WRITING_SENTENCES = 2,
    DRAWING = 3,
    GUESSING = 4,
    END = 5
}

export interface Game {

    id: string;

    creator: Player;

    players: Player[];

    status: GameStatus;
}
