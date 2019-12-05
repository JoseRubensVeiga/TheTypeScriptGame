import { KeyboardListener } from './KeyBoardListener';
import { Player } from './Player';
import { Game } from './Game';

const keyboardListener = new KeyboardListener();
const game = new Game(keyboardListener);

const player1 = new Player(keyboardListener, 3, 5, {
    up: 'ArrowUp',
    right: 'ArrowRight',
    down: 'ArrowDown',
    left: 'ArrowLeft',
    shoot: ' '
});

const player2 = new Player(keyboardListener, 2, 6, {
    up: 'w',
    right: 'd',
    down: 's',
    left: 'a',
    shoot: 'q'
});

game.registerPlayer(player1);
game.registerPlayer(player2);

console.log(game.getPlayers());