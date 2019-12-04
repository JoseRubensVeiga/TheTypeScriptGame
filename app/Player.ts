import { Observer } from './Observer';
import { MovePlayer } from './interfaces/MovePlayer.interface';
import { KeyboardKeys } from './interfaces/KeyboardKeys.interface';

import { GAME_COLUMNS, GAME_ROWS } from './enviroment';

export class Player {
    keys: any;
    player: HTMLElement;
    observer: Observer;

    constructor(column: number, row: number, playerKeys: KeyboardKeys) {
        this.keys = {
            [playerKeys.up]: {rows: -1},
            [playerKeys.right]: {columns: 1},
            [playerKeys.down]: {rows: 1},
            [playerKeys.left]: {columns: -1},
        };

        this.player = document.createElement('div');
        this.player.classList.add('player');

        this.player.style.gridColumn = this.validateRow(row).toString();
        this.player.style.gridRow = this.validateColumn(column).toString();
    }

    setPlayerObserver() {
        this.observer = new Observer((args: any) => {
            const keys = this.getKeys();
        
            if(keys[args]) {
                this.move(keys[args]);
            }
        })
    }

    getPlayerObserver() {
        return this.observer;
    };

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
        return this.keys;
    };

    move(move: MovePlayer) {
        const row = parseInt(this.player.style.getPropertyValue('grid-row').split(" ")[0]);
        const column = parseInt(this.player.style.getPropertyValue('grid-column').split(" ")[0]);

        const newRow = row + (move.rows || 0);
        const newColumn = column + (move.columns || 0);

        this.player.style.gridRow = `${this.validateRow(newRow)}`;
        this.player.style.gridColumn = `${this.validateColumn(newColumn)}`;
    };
}

