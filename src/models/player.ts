import { Pictures } from "./pictures";

export interface Player {
    
    username: string;

    picture: Pictures;

    sentence: string;

    toGuess: string;
}
