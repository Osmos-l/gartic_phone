import { Player } from "./player";

export class Game {
    id: number;
    name: string;
    players: Player[];

    constructor(name: string) {
        this.id = null;
        this.name = name;
        this.players = [];
    }
}

