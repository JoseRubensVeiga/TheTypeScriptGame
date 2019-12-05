import { KeyboardListener } from './KeyBoardListener';
import { Directions } from './interfaces/Directions.interface';
import { Player } from './Player';
import { ElementRef } from './ElementRef';
import { GAME_ROWS, GAME_COLUMNS } from './enviroment';
import { Observer } from './Observer';

export class Game {
    app: HTMLElement;
    players: Player[];
    keyboardListener: KeyboardListener;

    constructor(keyboardListener: KeyboardListener) {
        this.keyboardListener = keyboardListener;

        const elementRef = new ElementRef('app');
        this.app = elementRef.element;

        this.createGame();

        this.players = [];
    }

    createGame() {

        this.app.classList.add('game-container');
        this.app.style.gridTemplateRows = `repeat(${GAME_ROWS}, 1fr)`;
        this.app.style.gridTemplateColumns = `repeat(${GAME_COLUMNS}, 1fr)`;
        
        return Game;
    }

    registerPlayer(player: Player) {
        this.players.push(player);

        const observer = new Observer((data: {direction: Directions, column: number, row: number, player: Player}) => {
            this.shootBullet(data);
        });

        player.getShootBullet().addObserver(observer);

        this.app.appendChild(player.getElement());
    }

    removePlayer(player: Player) {
        this.players.splice(this.players.indexOf(player), 1);
    }
    

    validateColumn(column: number): number {
        return (column <= 0) ? 1 : ((column <= GAME_COLUMNS ) ? column : GAME_COLUMNS);
    }

    validateRow(row: number): number {
        return (row <= 0) ? 1 : ((row <= GAME_ROWS ) ? row : GAME_ROWS);
    }
    

    getActiveRow(bullet: HTMLElement): number {
        return parseInt(bullet.style.getPropertyValue('grid-row').split(" ")[0]);
    }

    getActiveColumn(bullet: HTMLElement): number {
        return parseInt(bullet.style.getPropertyValue('grid-column').split(" ")[0]);
    }

    createBullet(column: number, row: number): HTMLElement {
        let bullet = document.createElement('div');
        bullet.classList.add('bullet');
        
        bullet.style.gridColumn = this.validateColumn(column).toString();
        bullet.style.gridRow = this.validateRow(row).toString();
        return bullet;
    }

    registerBullet(direction: Directions, column: number, row: number, player: Player) {
        const moves = {
            'up': {x: -1},
            'right': {y: 1},
            'down': {x: 1},
            'left': {y: -1}
        };
        const move: {x?: number, y?: number} = moves[direction];

        const bullet = this.createBullet(column, row);

        this.app.insertBefore(bullet, this.app.childNodes[0])

        let isOne = false;

        const bulletAnimation = setInterval(() => {
            const row = this.getActiveRow(bullet);
            const column = this.getActiveColumn(bullet);

            if(
                row <= 1 && ['left', 'right'].some(d => d === direction) ||
                column <= 1 && ['up', 'down'].some(d => d === direction)
             ) {
             }else if(row <= 1 || column <= 1){
                bullet.remove();
                clearInterval(bulletAnimation);
            }

            if(row === 1 && column === 1) {
                bullet.remove();
                clearInterval(bulletAnimation);
            }

            bullet.style.gridColumn = `${column + (move.y || 0)}`;
            bullet.style.gridRow = `${row + (move.x || 0)}`;

            const players = this.getPlayers();
            if(players.length > 1)
                players.forEach((_player: Player) => {
                    if(_player.getActiveColumn() === column && _player.getActiveRow() === row && _player !== player) {
                        _player.getElement().remove();
                        this.removePlayer(player);
                        this
                            .keyboardListener
                            .getObservable()
                            .removeObserver(_player.getPlayerObserver());
                    }
                });

            if(row > GAME_ROWS || column > GAME_COLUMNS) {
                clearInterval(bulletAnimation);
                bullet.remove();
            }
        }, 100);
    }

    shootBullet(data: {direction: Directions, column: number, row: number, player: Player}) {
        this.registerBullet(data.direction, data.column, data.row, data.player);
    }

    getPlayers(): Player[]{
        return this.players;
    }
};

