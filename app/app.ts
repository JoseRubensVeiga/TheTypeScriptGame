import { Player } from './Player';
import { Game } from './Game';

const game = new Game();

const player1 = new Player(3, 5, {
    up: 'ArrowUp',
    right: 'ArrowRight',
    down: 'ArrowDown',
    left: 'ArrowLeft',
});

game.registerPlayer(player1);

player1.move({
    columns: 1,
    rows: 3
});

