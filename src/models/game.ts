import { Player } from "./player";

export interface Game {

    id: string;

    creator: Player;

    players: Player[];
}
