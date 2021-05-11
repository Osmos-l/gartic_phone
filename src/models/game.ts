import { Player } from "./player";

export interface Game {

    id: String;

    creator: Player;

    players: Player[];
}
