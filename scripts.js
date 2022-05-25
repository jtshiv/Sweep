// Display / UI

import { createBoard } from './minesweeper.js'

const BOARD_SIZE = 2;
const NUMBER_OF_MINES = 2;

const board = createBoard(BOARD_SIZE,NUMBER_OF_MINES);
const boardElement = document.querySelector('.board');

board.forEach(row=>{
	row.forEach(tile =>{
		boardElement.append(tile.element)
	})
})

boardElement.style.setProperty('--size',BOARD_SIZE);

// What needs to be done
//
// Draw board
// handle click
// handle right click
// tile states
// 		mark
// 		mine
// 		hidden
// check for win condition
