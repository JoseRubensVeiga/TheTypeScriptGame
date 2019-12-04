import { Player } from './Player';
import { Game } from './Game';

const game = new Game();

const player1 = new Player(3, 5, {
    up: 'ArrowUp',
    right: 'ArrowRight',
    down: 'ArrowDown',
    left: 'ArrowLeft',
});

const player2 = new Player(2, 6, {
    up: 'w',
    right: 'd',
    down: 's',
    left: 'a',
});

game.registerPlayer(player1);
game.registerPlayer(player2);