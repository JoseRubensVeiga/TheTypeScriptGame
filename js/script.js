/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/ElementRef.ts":
/*!***************************!*\
  !*** ./app/ElementRef.ts ***!
  \***************************/
/*! exports provided: ElementRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementRef", function() { return ElementRef; });
var ElementRef = /** @class */ (function () {
    function ElementRef(elementId) {
        this.element = document.getElementById(elementId);
    }
    return ElementRef;
}());



/***/ }),

/***/ "./app/Game.ts":
/*!*********************!*\
  !*** ./app/Game.ts ***!
  \*********************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
/* harmony import */ var _ElementRef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ElementRef */ "./app/ElementRef.ts");
/* harmony import */ var _enviroment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enviroment */ "./app/enviroment.ts");
/* harmony import */ var _Observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Observer */ "./app/Observer.ts");



var Game = /** @class */ (function () {
    function Game(keyboardListener) {
        this.keyboardListener = keyboardListener;
        var elementRef = new _ElementRef__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]('app');
        this.app = elementRef.element;
        this.createGame();
        this.players = [];
    }
    Game.prototype.createGame = function () {
        this.app.classList.add('game-container');
        this.app.style.gridTemplateRows = "repeat(" + _enviroment__WEBPACK_IMPORTED_MODULE_1__["GAME_ROWS"] + ", 1fr)";
        this.app.style.gridTemplateColumns = "repeat(" + _enviroment__WEBPACK_IMPORTED_MODULE_1__["GAME_COLUMNS"] + ", 1fr)";
        return Game;
    };
    Game.prototype.registerPlayer = function (player) {
        var _this = this;
        this.players.push(player);
        var observer = new _Observer__WEBPACK_IMPORTED_MODULE_2__["Observer"](function (data) {
            _this.shootBullet(data);
        });
        player.getShootBullet().addObserver(observer);
        this.app.appendChild(player.getElement());
    };
    Game.prototype.removePlayer = function (player) {
        this.players.splice(this.players.indexOf(player), 1);
    };
    Game.prototype.validateColumn = function (column) {
        return (column <= 0) ? 1 : ((column <= _enviroment__WEBPACK_IMPORTED_MODULE_1__["GAME_COLUMNS"]) ? column : _enviroment__WEBPACK_IMPORTED_MODULE_1__["GAME_COLUMNS"]);
    };
    Game.prototype.validateRow = function (row) {
        return (row <= 0) ? 1 : ((row <= _enviroment__WEBPACK_IMPORTED_MODULE_1__["GAME_ROWS"]) ? row : _enviroment__WEBPACK_IMPORTED_MODULE_1__["GAME_ROWS"]);
    };
    Game.prototype.getActiveRow = function (bullet) {
        return parseInt(bullet.style.getPropertyValue('grid-row').split(" ")[0]);
    };
    Game.prototype.getActiveColumn = function (bullet) {
        return parseInt(bullet.style.getPropertyValue('grid-column').split(" ")[0]);
    };
    Game.prototype.createBullet = function (column, row) {
        var bullet = document.createElement('div');
        bullet.classList.add('bullet');
        bullet.style.gridColumn = this.validateColumn(column).toString();
        bullet.style.gridRow = this.validateRow(row).toString();
        return bullet;
    };
    Game.prototype.registerBullet = function (direction, column, row, player) {
        var _this = this;
        var moves = {
            'up': { x: -1 },
            'right': { y: 1 },
            'down': { x: 1 },
            'left': { y: -1 }
        };
        var move = moves[direction];
        var bullet = this.createBullet(column, row);
        this.app.insertBefore(bullet, this.app.childNodes[0]);
        var isOne = false;
        var bulletAnimation = setInterval(function () {
            var row = _this.getActiveRow(bullet);
            var column = _this.getActiveColumn(bullet);
            if (row <= 1 && ['left', 'right'].some(function (d) { return d === direction; }) ||
                column <= 1 && ['up', 'down'].some(function (d) { return d === direction; })) {
            }
            else if (row <= 1 || column <= 1) {
                bullet.remove();
                clearInterval(bulletAnimation);
            }
            if (row === 1 && column === 1) {
                bullet.remove();
                clearInterval(bulletAnimation);
            }
            bullet.style.gridColumn = "" + (column + (move.y || 0));
            bullet.style.gridRow = "" + (row + (move.x || 0));
            var players = _this.getPlayers();
            if (players.length > 1)
                players.forEach(function (_player) {
                    if (_player.getActiveColumn() === column && _player.getActiveRow() === row && _player !== player) {
                        _player.getElement().remove();
                        _this.removePlayer(player);
                        _this
                            .keyboardListener
                            .getObservable()
                            .removeObserver(_player.getPlayerObserver());
                    }
                });
            if (row > _enviroment__WEBPACK_IMPORTED_MODULE_1__["GAME_ROWS"] || column > _enviroment__WEBPACK_IMPORTED_MODULE_1__["GAME_COLUMNS"]) {
                clearInterval(bulletAnimation);
                bullet.remove();
            }
        }, 100);
    };
    Game.prototype.shootBullet = function (data) {
        this.registerBullet(data.direction, data.column, data.row, data.player);
    };
    Game.prototype.getPlayers = function () {
        return this.players;
    };
    return Game;
}());

;


/***/ }),

/***/ "./app/KeyBoardListener.ts":
/*!*********************************!*\
  !*** ./app/KeyBoardListener.ts ***!
  \*********************************/
/*! exports provided: KeyboardListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyboardListener", function() { return KeyboardListener; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Observable */ "./app/Observable.ts");

var KeyboardListener = /** @class */ (function () {
    function KeyboardListener() {
        this.keyboardObservable = new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]();
        var _keyboardObservable = this.keyboardObservable;
        window.addEventListener("keydown", function (e) {
            _keyboardObservable.emit(e.key);
        });
    }
    KeyboardListener.prototype.getObservable = function () {
        return this.keyboardObservable;
    };
    return KeyboardListener;
}());



/***/ }),

/***/ "./app/Observable.ts":
/*!***************************!*\
  !*** ./app/Observable.ts ***!
  \***************************/
/*! exports provided: Observable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return Observable; });
var Observable = /** @class */ (function () {
    function Observable() {
        this.observers = [];
    }
    Observable.prototype.addObserver = function (observer) {
        this.observers.push(observer);
    };
    Observable.prototype.removeObserver = function (observer) {
        if (this.observers.indexOf(observer))
            this.observers.splice(this.observers.indexOf(observer), 1);
    };
    Observable.prototype.emit = function (arg) {
        this.observers.forEach(function (observer) { return observer.notify(arg); });
    };
    Observable.prototype.getObservers = function () {
        return this.observers;
    };
    return Observable;
}());



/***/ }),

/***/ "./app/Observer.ts":
/*!*************************!*\
  !*** ./app/Observer.ts ***!
  \*************************/
/*! exports provided: Observer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Observer", function() { return Observer; });
var Observer = /** @class */ (function () {
    function Observer(notifyFn) {
        this.notifyFn = notifyFn;
    }
    Observer.prototype.notify = function (data) {
        this.notifyFn(data);
    };
    return Observer;
}());



/***/ }),

/***/ "./app/Player.ts":
/*!***********************!*\
  !*** ./app/Player.ts ***!
  \***********************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony import */ var _Observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Observer */ "./app/Observer.ts");
/* harmony import */ var _enviroment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enviroment */ "./app/enviroment.ts");
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Observable */ "./app/Observable.ts");



var Player = /** @class */ (function () {
    function Player(keyboardListener, column, row, playerKeys) {
        var _a;
        this.lastMovement = 'ArrowRight';
        this.shootObservable = new _Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"]();
        this.keyboardListener = keyboardListener;
        this.moveKeys = (_a = {},
            _a[playerKeys.up] = { rows: -1 },
            _a[playerKeys.right] = { columns: 1 },
            _a[playerKeys.down] = { rows: 1 },
            _a[playerKeys.left] = { columns: -1 },
            _a);
        this.shootKey = playerKeys.shoot;
        this.keys = playerKeys;
        this.player = document.createElement('div');
        this.player.classList.add('player');
        this.player.style.gridColumn = this.validateRow(row).toString();
        this.player.style.gridRow = this.validateColumn(column).toString();
        this.setPlayerObserver();
        this.subscribeKeyboardListener();
    }
    Player.prototype.setPlayerObserver = function () {
        var _this = this;
        this.observer = new _Observer__WEBPACK_IMPORTED_MODULE_0__["Observer"](function (args) {
            if (_this.moveKeys[args]) {
                _this.move(_this.moveKeys[args]);
                _this.lastMovement = args;
            }
            if (args === _this.shootKey) {
                var directions = Object.keys(_this.keys);
                var direction = directions.filter(function (key) { return _this.keys[key] === _this.lastMovement; });
                var data = {
                    direction: direction[0],
                    row: _this.getActiveRow(),
                    column: _this.getActiveColumn(),
                    player: _this
                };
                _this.shootBullet(data);
            }
        });
    };
    Player.prototype.getShootBullet = function () {
        return this.shootObservable;
    };
    Player.prototype.shootBullet = function (data) {
        this.shootObservable.emit(data);
    };
    Player.prototype.getPlayerObserver = function () {
        return this.observer;
    };
    ;
    Player.prototype.subscribeKeyboardListener = function () {
        this.keyboardListener.getObservable().addObserver(this.getPlayerObserver());
    };
    Player.prototype.validateColumn = function (column) {
        return (column <= 0) ? 1 : ((column <= _enviroment__WEBPACK_IMPORTED_MODULE_1__["GAME_COLUMNS"]) ? column : _enviroment__WEBPACK_IMPORTED_MODULE_1__["GAME_COLUMNS"]);
    };
    Player.prototype.validateRow = function (row) {
        return (row <= 0) ? 1 : ((row <= _enviroment__WEBPACK_IMPORTED_MODULE_1__["GAME_ROWS"]) ? row : _enviroment__WEBPACK_IMPORTED_MODULE_1__["GAME_ROWS"]);
    };
    Player.prototype.getElement = function () {
        return this.player;
    };
    ;
    Player.prototype.getKeys = function () {
        return this.moveKeys;
    };
    ;
    Player.prototype.getActiveRow = function () {
        return parseInt(this.player.style.getPropertyValue('grid-row').split(" ")[0]);
    };
    Player.prototype.getActiveColumn = function () {
        return parseInt(this.player.style.getPropertyValue('grid-column').split(" ")[0]);
    };
    Player.prototype.move = function (move) {
        var row = this.getActiveRow();
        var column = this.getActiveColumn();
        var newRow = row + (move.rows || 0);
        var newColumn = column + (move.columns || 0);
        this.player.style.gridRow = "" + this.validateRow(newRow);
        this.player.style.gridColumn = "" + this.validateColumn(newColumn);
    };
    ;
    return Player;
}());



/***/ }),

/***/ "./app/app.ts":
/*!********************!*\
  !*** ./app/app.ts ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _KeyBoardListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KeyBoardListener */ "./app/KeyBoardListener.ts");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player */ "./app/Player.ts");
/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Game */ "./app/Game.ts");



var keyboardListener = new _KeyBoardListener__WEBPACK_IMPORTED_MODULE_0__["KeyboardListener"]();
var game = new _Game__WEBPACK_IMPORTED_MODULE_2__["Game"](keyboardListener);
var player1 = new _Player__WEBPACK_IMPORTED_MODULE_1__["Player"](keyboardListener, 3, 5, {
    up: 'ArrowUp',
    right: 'ArrowRight',
    down: 'ArrowDown',
    left: 'ArrowLeft',
    shoot: ' '
});
var player2 = new _Player__WEBPACK_IMPORTED_MODULE_1__["Player"](keyboardListener, 2, 6, {
    up: 'w',
    right: 'd',
    down: 's',
    left: 'a',
    shoot: 'q'
});
game.registerPlayer(player1);
game.registerPlayer(player2);
console.log(game.getPlayers());


/***/ }),

/***/ "./app/enviroment.ts":
/*!***************************!*\
  !*** ./app/enviroment.ts ***!
  \***************************/
/*! exports provided: GAME_COLUMNS, GAME_ROWS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GAME_COLUMNS", function() { return GAME_COLUMNS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GAME_ROWS", function() { return GAME_ROWS; });
var GAME_COLUMNS = 15;
var GAME_ROWS = 15;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL0VsZW1lbnRSZWYudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL0dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL0tleUJvYXJkTGlzdGVuZXIudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL09ic2VydmFibGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL09ic2VydmVyLnRzIiwid2VicGFjazovLy8uL2FwcC9QbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZW52aXJvbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtJQUdJLG9CQUFZLFNBQWlCO1FBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxT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QUFFLEdBQUc7SUFDUCxLQUFLLEVBQUUsR0FBRztJQUNWLElBQUksRUFBRSxHQUFHO0lBQ1QsSUFBSSxFQUFFLEdBQUc7SUFDVCxLQUFLLEVBQUUsR0FBRztDQUNiLENBQUMsQ0FBQztBQUVILElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDN0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUU3QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7O0FDekIvQjtBQUFBO0FBQUE7QUFBTyxJQUFNLFlBQVksR0FBRyxFQUFFLENBQUM7QUFDeEIsSUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDIiwiZmlsZSI6InNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXBwL2FwcC50c1wiKTtcbiIsImV4cG9ydCBjbGFzcyBFbGVtZW50UmVmIHtcbiAgICBwdWJsaWMgZWxlbWVudDogSFRNTEVsZW1lbnQ7XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50SWQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50SWQpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBLZXlib2FyZExpc3RlbmVyIH0gZnJvbSAnLi9LZXlCb2FyZExpc3RlbmVyJztcbmltcG9ydCB7IERpcmVjdGlvbnMgfSBmcm9tICcuL2ludGVyZmFjZXMvRGlyZWN0aW9ucy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi9QbGF5ZXInO1xuaW1wb3J0IHsgRWxlbWVudFJlZiB9IGZyb20gJy4vRWxlbWVudFJlZic7XG5pbXBvcnQgeyBHQU1FX1JPV1MsIEdBTUVfQ09MVU1OUyB9IGZyb20gJy4vZW52aXJvbWVudCc7XG5pbXBvcnQgeyBPYnNlcnZlciB9IGZyb20gJy4vT2JzZXJ2ZXInO1xuXG5leHBvcnQgY2xhc3MgR2FtZSB7XG4gICAgYXBwOiBIVE1MRWxlbWVudDtcbiAgICBwbGF5ZXJzOiBQbGF5ZXJbXTtcbiAgICBrZXlib2FyZExpc3RlbmVyOiBLZXlib2FyZExpc3RlbmVyO1xuXG4gICAgY29uc3RydWN0b3Ioa2V5Ym9hcmRMaXN0ZW5lcjogS2V5Ym9hcmRMaXN0ZW5lcikge1xuICAgICAgICB0aGlzLmtleWJvYXJkTGlzdGVuZXIgPSBrZXlib2FyZExpc3RlbmVyO1xuXG4gICAgICAgIGNvbnN0IGVsZW1lbnRSZWYgPSBuZXcgRWxlbWVudFJlZignYXBwJyk7XG4gICAgICAgIHRoaXMuYXBwID0gZWxlbWVudFJlZi5lbGVtZW50O1xuXG4gICAgICAgIHRoaXMuY3JlYXRlR2FtZSgpO1xuXG4gICAgICAgIHRoaXMucGxheWVycyA9IFtdO1xuICAgIH1cblxuICAgIGNyZWF0ZUdhbWUoKSB7XG5cbiAgICAgICAgdGhpcy5hcHAuY2xhc3NMaXN0LmFkZCgnZ2FtZS1jb250YWluZXInKTtcbiAgICAgICAgdGhpcy5hcHAuc3R5bGUuZ3JpZFRlbXBsYXRlUm93cyA9IGByZXBlYXQoJHtHQU1FX1JPV1N9LCAxZnIpYDtcbiAgICAgICAgdGhpcy5hcHAuc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9IGByZXBlYXQoJHtHQU1FX0NPTFVNTlN9LCAxZnIpYDtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBHYW1lO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyUGxheWVyKHBsYXllcjogUGxheWVyKSB7XG4gICAgICAgIHRoaXMucGxheWVycy5wdXNoKHBsYXllcik7XG5cbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgT2JzZXJ2ZXIoKGRhdGE6IHtkaXJlY3Rpb246IERpcmVjdGlvbnMsIGNvbHVtbjogbnVtYmVyLCByb3c6IG51bWJlciwgcGxheWVyOiBQbGF5ZXJ9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNob290QnVsbGV0KGRhdGEpO1xuICAgICAgICB9KTtcblxuICAgICAgICBwbGF5ZXIuZ2V0U2hvb3RCdWxsZXQoKS5hZGRPYnNlcnZlcihvYnNlcnZlcik7XG5cbiAgICAgICAgdGhpcy5hcHAuYXBwZW5kQ2hpbGQocGxheWVyLmdldEVsZW1lbnQoKSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlUGxheWVyKHBsYXllcjogUGxheWVyKSB7XG4gICAgICAgIHRoaXMucGxheWVycy5zcGxpY2UodGhpcy5wbGF5ZXJzLmluZGV4T2YocGxheWVyKSwgMSk7XG4gICAgfVxuICAgIFxuXG4gICAgdmFsaWRhdGVDb2x1bW4oY29sdW1uOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gKGNvbHVtbiA8PSAwKSA/IDEgOiAoKGNvbHVtbiA8PSBHQU1FX0NPTFVNTlMgKSA/IGNvbHVtbiA6IEdBTUVfQ09MVU1OUyk7XG4gICAgfVxuXG4gICAgdmFsaWRhdGVSb3cocm93OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gKHJvdyA8PSAwKSA/IDEgOiAoKHJvdyA8PSBHQU1FX1JPV1MgKSA/IHJvdyA6IEdBTUVfUk9XUyk7XG4gICAgfVxuICAgIFxuXG4gICAgZ2V0QWN0aXZlUm93KGJ1bGxldDogSFRNTEVsZW1lbnQpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQoYnVsbGV0LnN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2dyaWQtcm93Jykuc3BsaXQoXCIgXCIpWzBdKTtcbiAgICB9XG5cbiAgICBnZXRBY3RpdmVDb2x1bW4oYnVsbGV0OiBIVE1MRWxlbWVudCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBwYXJzZUludChidWxsZXQuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnZ3JpZC1jb2x1bW4nKS5zcGxpdChcIiBcIilbMF0pO1xuICAgIH1cblxuICAgIGNyZWF0ZUJ1bGxldChjb2x1bW46IG51bWJlciwgcm93OiBudW1iZXIpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIGxldCBidWxsZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYnVsbGV0LmNsYXNzTGlzdC5hZGQoJ2J1bGxldCcpO1xuICAgICAgICBcbiAgICAgICAgYnVsbGV0LnN0eWxlLmdyaWRDb2x1bW4gPSB0aGlzLnZhbGlkYXRlQ29sdW1uKGNvbHVtbikudG9TdHJpbmcoKTtcbiAgICAgICAgYnVsbGV0LnN0eWxlLmdyaWRSb3cgPSB0aGlzLnZhbGlkYXRlUm93KHJvdykudG9TdHJpbmcoKTtcbiAgICAgICAgcmV0dXJuIGJ1bGxldDtcbiAgICB9XG5cbiAgICByZWdpc3RlckJ1bGxldChkaXJlY3Rpb246IERpcmVjdGlvbnMsIGNvbHVtbjogbnVtYmVyLCByb3c6IG51bWJlciwgcGxheWVyOiBQbGF5ZXIpIHtcbiAgICAgICAgY29uc3QgbW92ZXMgPSB7XG4gICAgICAgICAgICAndXAnOiB7eDogLTF9LFxuICAgICAgICAgICAgJ3JpZ2h0Jzoge3k6IDF9LFxuICAgICAgICAgICAgJ2Rvd24nOiB7eDogMX0sXG4gICAgICAgICAgICAnbGVmdCc6IHt5OiAtMX1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgbW92ZToge3g/OiBudW1iZXIsIHk/OiBudW1iZXJ9ID0gbW92ZXNbZGlyZWN0aW9uXTtcblxuICAgICAgICBjb25zdCBidWxsZXQgPSB0aGlzLmNyZWF0ZUJ1bGxldChjb2x1bW4sIHJvdyk7XG5cbiAgICAgICAgdGhpcy5hcHAuaW5zZXJ0QmVmb3JlKGJ1bGxldCwgdGhpcy5hcHAuY2hpbGROb2Rlc1swXSlcblxuICAgICAgICBsZXQgaXNPbmUgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBidWxsZXRBbmltYXRpb24gPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByb3cgPSB0aGlzLmdldEFjdGl2ZVJvdyhidWxsZXQpO1xuICAgICAgICAgICAgY29uc3QgY29sdW1uID0gdGhpcy5nZXRBY3RpdmVDb2x1bW4oYnVsbGV0KTtcblxuICAgICAgICAgICAgaWYoXG4gICAgICAgICAgICAgICAgcm93IDw9IDEgJiYgWydsZWZ0JywgJ3JpZ2h0J10uc29tZShkID0+IGQgPT09IGRpcmVjdGlvbikgfHxcbiAgICAgICAgICAgICAgICBjb2x1bW4gPD0gMSAmJiBbJ3VwJywgJ2Rvd24nXS5zb21lKGQgPT4gZCA9PT0gZGlyZWN0aW9uKVxuICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgIH1lbHNlIGlmKHJvdyA8PSAxIHx8IGNvbHVtbiA8PSAxKXtcbiAgICAgICAgICAgICAgICBidWxsZXQucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChidWxsZXRBbmltYXRpb24pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihyb3cgPT09IDEgJiYgY29sdW1uID09PSAxKSB7XG4gICAgICAgICAgICAgICAgYnVsbGV0LnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoYnVsbGV0QW5pbWF0aW9uKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnVsbGV0LnN0eWxlLmdyaWRDb2x1bW4gPSBgJHtjb2x1bW4gKyAobW92ZS55IHx8IDApfWA7XG4gICAgICAgICAgICBidWxsZXQuc3R5bGUuZ3JpZFJvdyA9IGAke3JvdyArIChtb3ZlLnggfHwgMCl9YDtcblxuICAgICAgICAgICAgY29uc3QgcGxheWVycyA9IHRoaXMuZ2V0UGxheWVycygpO1xuICAgICAgICAgICAgaWYocGxheWVycy5sZW5ndGggPiAxKVxuICAgICAgICAgICAgICAgIHBsYXllcnMuZm9yRWFjaCgoX3BsYXllcjogUGxheWVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKF9wbGF5ZXIuZ2V0QWN0aXZlQ29sdW1uKCkgPT09IGNvbHVtbiAmJiBfcGxheWVyLmdldEFjdGl2ZVJvdygpID09PSByb3cgJiYgX3BsYXllciAhPT0gcGxheWVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfcGxheWVyLmdldEVsZW1lbnQoKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlUGxheWVyKHBsYXllcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmtleWJvYXJkTGlzdGVuZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0T2JzZXJ2YWJsZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZU9ic2VydmVyKF9wbGF5ZXIuZ2V0UGxheWVyT2JzZXJ2ZXIoKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYocm93ID4gR0FNRV9ST1dTIHx8IGNvbHVtbiA+IEdBTUVfQ09MVU1OUykge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoYnVsbGV0QW5pbWF0aW9uKTtcbiAgICAgICAgICAgICAgICBidWxsZXQucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMCk7XG4gICAgfVxuXG4gICAgc2hvb3RCdWxsZXQoZGF0YToge2RpcmVjdGlvbjogRGlyZWN0aW9ucywgY29sdW1uOiBudW1iZXIsIHJvdzogbnVtYmVyLCBwbGF5ZXI6IFBsYXllcn0pIHtcbiAgICAgICAgdGhpcy5yZWdpc3RlckJ1bGxldChkYXRhLmRpcmVjdGlvbiwgZGF0YS5jb2x1bW4sIGRhdGEucm93LCBkYXRhLnBsYXllcik7XG4gICAgfVxuXG4gICAgZ2V0UGxheWVycygpOiBQbGF5ZXJbXXtcbiAgICAgICAgcmV0dXJuIHRoaXMucGxheWVycztcbiAgICB9XG59O1xuXG4iLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcIi4vT2JzZXJ2YWJsZVwiO1xuXG5leHBvcnQgY2xhc3MgS2V5Ym9hcmRMaXN0ZW5lciB7XG4gICAgcHJpdmF0ZSBrZXlib2FyZE9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZSgpO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGNvbnN0IF9rZXlib2FyZE9ic2VydmFibGUgPSB0aGlzLmtleWJvYXJkT2JzZXJ2YWJsZTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIF9rZXlib2FyZE9ic2VydmFibGUuZW1pdChlLmtleSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldE9ic2VydmFibGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmtleWJvYXJkT2JzZXJ2YWJsZTtcbiAgICB9XG59IiwiaW1wb3J0IHsgT2JzZXJ2ZXIgfSBmcm9tICcuL09ic2VydmVyJztcblxuZXhwb3J0IGNsYXNzIE9ic2VydmFibGUge1xuICAgIHByaXZhdGUgb2JzZXJ2ZXJzOiBhbnlbXSA9IFtdO1xuXG4gICAgYWRkT2JzZXJ2ZXIob2JzZXJ2ZXI6IE9ic2VydmVyKSA6IHZvaWQge1xuICAgICAgICB0aGlzLm9ic2VydmVycy5wdXNoKG9ic2VydmVyKTtcbiAgICB9XG5cbiAgICByZW1vdmVPYnNlcnZlcihvYnNlcnZlcjogT2JzZXJ2ZXIpOiB2b2lkIHtcbiAgICAgICAgaWYodGhpcy5vYnNlcnZlcnMuaW5kZXhPZihvYnNlcnZlcikpXG4gICAgICAgICAgICB0aGlzLm9ic2VydmVycy5zcGxpY2UodGhpcy5vYnNlcnZlcnMuaW5kZXhPZihvYnNlcnZlciksIDEpO1xuICAgIH1cblxuICAgIGVtaXQoYXJnOiBhbnlbXSB8IHt9KSB7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzLmZvckVhY2goIChvYnNlcnZlciA6IE9ic2VydmVyKSA9PiBvYnNlcnZlci5ub3RpZnkoYXJnKSk7XG4gICAgfVxuXG4gICAgZ2V0T2JzZXJ2ZXJzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vYnNlcnZlcnM7XG4gICAgfVxufVxuXG4iLCJleHBvcnQgY2xhc3MgT2JzZXJ2ZXIge1xuICAgIG5vdGlmeUZuOiBGdW5jdGlvbjtcblxuICAgIGNvbnN0cnVjdG9yKG5vdGlmeUZuOiBGdW5jdGlvbikge1xuICAgICAgICB0aGlzLm5vdGlmeUZuID0gbm90aWZ5Rm47XG4gICAgfVxuICAgIFxuICAgIG5vdGlmeShkYXRhOiBhbnlbXSB8IHt9KSB7XG4gICAgICAgIHRoaXMubm90aWZ5Rm4oZGF0YSk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBLZXlib2FyZExpc3RlbmVyIH0gZnJvbSAnLi9LZXlCb2FyZExpc3RlbmVyJztcbmltcG9ydCB7IE9ic2VydmVyIH0gZnJvbSAnLi9PYnNlcnZlcic7XG5pbXBvcnQgeyBNb3ZlUGxheWVyIH0gZnJvbSAnLi9pbnRlcmZhY2VzL01vdmVQbGF5ZXIuaW50ZXJmYWNlJztcbmltcG9ydCB7IEtleWJvYXJkS2V5cyB9IGZyb20gJy4vaW50ZXJmYWNlcy9LZXlib2FyZEtleXMuaW50ZXJmYWNlJztcblxuaW1wb3J0IHsgR0FNRV9DT0xVTU5TLCBHQU1FX1JPV1MgfSBmcm9tICcuL2Vudmlyb21lbnQnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4vT2JzZXJ2YWJsZSc7XG5cbmV4cG9ydCBjbGFzcyBQbGF5ZXIge1xuICAgIG1vdmVLZXlzOiBhbnk7XG4gICAga2V5czogYW55O1xuICAgIHNob290S2V5OiBzdHJpbmc7XG4gICAgbGFzdE1vdmVtZW50OiBzdHJpbmcgPSAnQXJyb3dSaWdodCc7XG4gICAgcGxheWVyOiBIVE1MRWxlbWVudDtcbiAgICBvYnNlcnZlcjogT2JzZXJ2ZXI7XG4gICAgc2hvb3RPYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGUoKTtcbiAgICBrZXlib2FyZExpc3RlbmVyOiBLZXlib2FyZExpc3RlbmVyO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGtleWJvYXJkTGlzdGVuZXI6IEtleWJvYXJkTGlzdGVuZXIsXG4gICAgICAgIGNvbHVtbjogbnVtYmVyLFxuICAgICAgICByb3c6IG51bWJlcixcbiAgICAgICAgcGxheWVyS2V5czogS2V5Ym9hcmRLZXlzXG4gICAgKSB7XG4gICAgICAgIHRoaXMua2V5Ym9hcmRMaXN0ZW5lciA9IGtleWJvYXJkTGlzdGVuZXI7XG4gICAgICAgIHRoaXMubW92ZUtleXMgPSB7XG4gICAgICAgICAgICBbcGxheWVyS2V5cy51cF06IHtyb3dzOiAtMX0sXG4gICAgICAgICAgICBbcGxheWVyS2V5cy5yaWdodF06IHtjb2x1bW5zOiAxfSxcbiAgICAgICAgICAgIFtwbGF5ZXJLZXlzLmRvd25dOiB7cm93czogMX0sXG4gICAgICAgICAgICBbcGxheWVyS2V5cy5sZWZ0XToge2NvbHVtbnM6IC0xfVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc2hvb3RLZXkgPSBwbGF5ZXJLZXlzLnNob290O1xuXG4gICAgICAgIHRoaXMua2V5cyA9IHBsYXllcktleXM7XG5cbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIuY2xhc3NMaXN0LmFkZCgncGxheWVyJyk7XG5cbiAgICAgICAgdGhpcy5wbGF5ZXIuc3R5bGUuZ3JpZENvbHVtbiA9IHRoaXMudmFsaWRhdGVSb3cocm93KS50b1N0cmluZygpO1xuICAgICAgICB0aGlzLnBsYXllci5zdHlsZS5ncmlkUm93ID0gdGhpcy52YWxpZGF0ZUNvbHVtbihjb2x1bW4pLnRvU3RyaW5nKCk7XG5cbiAgICAgICAgdGhpcy5zZXRQbGF5ZXJPYnNlcnZlcigpO1xuICAgICAgICB0aGlzLnN1YnNjcmliZUtleWJvYXJkTGlzdGVuZXIoKTtcbiAgICB9XG5cbiAgICBzZXRQbGF5ZXJPYnNlcnZlcigpIHtcbiAgICAgICAgdGhpcy5vYnNlcnZlciA9IG5ldyBPYnNlcnZlcigoYXJnczogYW55KSA9PiB7XG4gICAgICAgICAgICBpZih0aGlzLm1vdmVLZXlzW2FyZ3NdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlKHRoaXMubW92ZUtleXNbYXJnc10pO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0TW92ZW1lbnQgPSBhcmdzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihhcmdzID09PSB0aGlzLnNob290S2V5KSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkaXJlY3Rpb25zID0gT2JqZWN0LmtleXModGhpcy5rZXlzKVxuICAgICAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IGRpcmVjdGlvbnMuZmlsdGVyKGtleSA9PiB0aGlzLmtleXNba2V5XSA9PT0gdGhpcy5sYXN0TW92ZW1lbnQpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBkaXJlY3Rpb25bMF0sXG4gICAgICAgICAgICAgICAgICAgIHJvdzogdGhpcy5nZXRBY3RpdmVSb3coKSxcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uOiB0aGlzLmdldEFjdGl2ZUNvbHVtbigpLFxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXI6IHRoaXNcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvb3RCdWxsZXQoZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZ2V0U2hvb3RCdWxsZXQoKTogT2JzZXJ2YWJsZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNob290T2JzZXJ2YWJsZTtcbiAgICB9XG5cbiAgICBzaG9vdEJ1bGxldChkYXRhOiB7fSk6IHZvaWQge1xuICAgICAgICB0aGlzLnNob290T2JzZXJ2YWJsZS5lbWl0KGRhdGEpO1xuICAgIH1cblxuICAgIGdldFBsYXllck9ic2VydmVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vYnNlcnZlcjtcbiAgICB9O1xuXG4gICAgc3Vic2NyaWJlS2V5Ym9hcmRMaXN0ZW5lcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5rZXlib2FyZExpc3RlbmVyLmdldE9ic2VydmFibGUoKS5hZGRPYnNlcnZlcih0aGlzLmdldFBsYXllck9ic2VydmVyKCkpO1xuICAgIH1cblxuICAgIHZhbGlkYXRlQ29sdW1uKGNvbHVtbjogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIChjb2x1bW4gPD0gMCkgPyAxIDogKChjb2x1bW4gPD0gR0FNRV9DT0xVTU5TICkgPyBjb2x1bW4gOiBHQU1FX0NPTFVNTlMpO1xuICAgIH1cblxuICAgIHZhbGlkYXRlUm93KHJvdzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIChyb3cgPD0gMCkgPyAxIDogKChyb3cgPD0gR0FNRV9ST1dTICkgPyByb3cgOiBHQU1FX1JPV1MpO1xuICAgIH1cblxuICAgIGdldEVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBsYXllcjtcbiAgICB9O1xuXG4gICAgZ2V0S2V5cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW92ZUtleXM7XG4gICAgfTtcblxuICAgIGdldEFjdGl2ZVJvdygpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQodGhpcy5wbGF5ZXIuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnZ3JpZC1yb3cnKS5zcGxpdChcIiBcIilbMF0pO1xuICAgIH1cblxuICAgIGdldEFjdGl2ZUNvbHVtbigpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQodGhpcy5wbGF5ZXIuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnZ3JpZC1jb2x1bW4nKS5zcGxpdChcIiBcIilbMF0pO1xuICAgIH1cblxuICAgIG1vdmUobW92ZTogTW92ZVBsYXllcikge1xuICAgICAgICBjb25zdCByb3cgPSB0aGlzLmdldEFjdGl2ZVJvdygpO1xuICAgICAgICBjb25zdCBjb2x1bW4gPSB0aGlzLmdldEFjdGl2ZUNvbHVtbigpO1xuXG4gICAgICAgIGNvbnN0IG5ld1JvdyA9IHJvdyArIChtb3ZlLnJvd3MgfHwgMCk7XG4gICAgICAgIGNvbnN0IG5ld0NvbHVtbiA9IGNvbHVtbiArIChtb3ZlLmNvbHVtbnMgfHwgMCk7XG5cbiAgICAgICAgdGhpcy5wbGF5ZXIuc3R5bGUuZ3JpZFJvdyA9IGAke3RoaXMudmFsaWRhdGVSb3cobmV3Um93KX1gO1xuICAgICAgICB0aGlzLnBsYXllci5zdHlsZS5ncmlkQ29sdW1uID0gYCR7dGhpcy52YWxpZGF0ZUNvbHVtbihuZXdDb2x1bW4pfWA7XG4gICAgfTtcbn1cblxuIiwiaW1wb3J0IHsgS2V5Ym9hcmRMaXN0ZW5lciB9IGZyb20gJy4vS2V5Qm9hcmRMaXN0ZW5lcic7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuL1BsYXllcic7XG5pbXBvcnQgeyBHYW1lIH0gZnJvbSAnLi9HYW1lJztcblxuY29uc3Qga2V5Ym9hcmRMaXN0ZW5lciA9IG5ldyBLZXlib2FyZExpc3RlbmVyKCk7XG5jb25zdCBnYW1lID0gbmV3IEdhbWUoa2V5Ym9hcmRMaXN0ZW5lcik7XG5cbmNvbnN0IHBsYXllcjEgPSBuZXcgUGxheWVyKGtleWJvYXJkTGlzdGVuZXIsIDMsIDUsIHtcbiAgICB1cDogJ0Fycm93VXAnLFxuICAgIHJpZ2h0OiAnQXJyb3dSaWdodCcsXG4gICAgZG93bjogJ0Fycm93RG93bicsXG4gICAgbGVmdDogJ0Fycm93TGVmdCcsXG4gICAgc2hvb3Q6ICcgJ1xufSk7XG5cbmNvbnN0IHBsYXllcjIgPSBuZXcgUGxheWVyKGtleWJvYXJkTGlzdGVuZXIsIDIsIDYsIHtcbiAgICB1cDogJ3cnLFxuICAgIHJpZ2h0OiAnZCcsXG4gICAgZG93bjogJ3MnLFxuICAgIGxlZnQ6ICdhJyxcbiAgICBzaG9vdDogJ3EnXG59KTtcblxuZ2FtZS5yZWdpc3RlclBsYXllcihwbGF5ZXIxKTtcbmdhbWUucmVnaXN0ZXJQbGF5ZXIocGxheWVyMik7XG5cbmNvbnNvbGUubG9nKGdhbWUuZ2V0UGxheWVycygpKTsiLCJcbmV4cG9ydCBjb25zdCBHQU1FX0NPTFVNTlMgPSAxNTtcbmV4cG9ydCBjb25zdCBHQU1FX1JPV1MgPSAxNTsiXSwic291cmNlUm9vdCI6IiJ9