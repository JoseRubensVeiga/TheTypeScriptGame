import { KeyboardListener } from './KeyBoardListener';
import { Observer } from './Observer';
import { MovePlayer } from './interfaces/MovePlayer.interface';
import { KeyboardKeys } from './interfaces/KeyboardKeys.interface';

import { GAME_COLUMNS, GAME_ROWS } from './enviroment';
import { Observable } from './Observable';

export class Player {
    moveKeys: any;
    keys: any;
    shootKey: string;
    lastMovement: string = 'ArrowRight';
    player: HTMLElement;
    observer: Observer;
    shootObservable = new Observable();
    keyboardListener: KeyboardListener;

    constructor(
        keyboardListener: KeyboardListener,
        column: number,
        row: number,
        playerKeys: KeyboardKeys
    ) {
        this.keyboardListener = keyboardListener;
        this.moveKeys = {
            [playerKeys.up]: {rows: -1},
            [playerKeys.right]: {columns: 1},
            [playerKeys.down]: {rows: 1},
            [playerKeys.left]: {columns: -1}
        };

        this.shootKey = playerKeys.shoot;

        this.keys = playerKeys;

        this.player = document.createElement('div');
        this.player.classList.add('player');

        this.player.style.gridColumn = this.validateRow(row).toString();
        this.player.style.gridRow = this.validateColumn(column).toString();

        this.setPlayerObserver();
        this.subscribeKeyboardListener();
    }

    setPlayerObserver() {
        this.observer = new Observer((args: any) => {
            if(this.moveKeys[args]) {
                this.move(this.moveKeys[args]);

                this.lastMovement = args;
            }

            if(args === this.shootKey) {

                const directions = Object.keys(this.keys)
                const direction = directions.filter(key => this.keys[key] === this.lastMovement);

                const data = {
                    direction: direction[0],
                    row: this.getActiveRow(),
                    column: this.getActiveColumn(),
                    player: this
                };
                this.shootBullet(data);
            }
        })
    }

    getShootBullet(): Observable {
        return this.shootObservable;
    }

    shootBullet(data: {}): void {
        this.shootObservable.emit(data);
    }

    getPlayerObserver() {
        return this.observer;
    };

    subscribeKeyboardListener(): void {
        this.keyboardListener.getObservable().addObserver(this.getPlayerObserver());
    }

    validateColumn(column: number): number {
        return (column <= 0) ? 1 : ((column <= GAME_COLUMNS ) ? column : GAME_COLUMNS);
    }

    validateRow(row: number): number {
        return (row <= 0) ? 1 : ((row <= GAME_ROWS ) ? row : GAME_ROWS);
    }

    getElement() {
        return this.player;
    };

    getKeys() {
        return this.moveKeys;
    };

    getActiveRow(): number {
        return parseInt(this.player.style.getPropertyValue('grid-row').split(" ")[0]);
    }

    getActiveColumn(): number {
        return parseInt(this.player.style.getPropertyValue('grid-column').split(" ")[0]);
    }

    move(move: MovePlayer) {
        const row = this.getActiveRow();
        const column = this.getActiveColumn();

        const newRow = row + (move.rows || 0);
        const newColumn = column + (move.columns || 0);

        this.player.style.gridRow = `${this.validateRow(newRow)}`;
        this.player.style.gridColumn = `${this.validateColumn(newColumn)}`;
    };
}

