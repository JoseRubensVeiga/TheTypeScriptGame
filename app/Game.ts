import { Player } from './Player';
import { ElementRef } from './ElementRef';
import { GAME_ROWS, GAME_COLUMNS } from './enviroment';

export class Game {
    app: HTMLElement;

    constructor() {
        const elementRef = new ElementRef('app');
        this.app = elementRef.element;

        this.createGame();
    }

    createGame() {

        this.app.classList.add('game-container');
        this.app.style.gridTemplateRows = `repeat(${GAME_ROWS}, 1fr)`;
        this.app.style.gridTemplateColumns = `repeat(${GAME_COLUMNS}, 1fr)`;
        
        return Game;
    }

    registerPlayer(player: any) {

        if(player instanceof Player) {
            player = player.getElement();
        }
        this.app.appendChild(player);
    }
};

