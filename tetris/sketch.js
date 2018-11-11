// This is the size in pixels of a single square
let gridSize = 30;

let master;
let board;
let arena;


function setup() {
	createCanvas(600, 800);

	master = new Master();
	arena = new Arena();
}

function draw() {
	background(200);

	master.update();
	arena.display();
}

function keyPressed() {
	if (keyCode === RIGHT_ARROW) {
		arena.piece.move('right');
	}
	else if (keyCode === LEFT_ARROW) {
		arena.piece.move('left');
	}
}

class Master {
	// This class controls the game
	constructor() {
		//this.playing = true;
		//this.score = 0;

		// Variables that set the framerate, depends on the level
		this.start = new Date();
		this.waitFor = 250;
	}

	update() {
		// Updates the elements
		if (this.waitedEnough()) {
			arena.update();
		}
	}

	waitedEnough() {
		// Checks if the game has waited enough time to update
		let now = new Date();
		if ((now - this.start) > this.waitFor) {
			this.start =  new Date();
			return true;
		}
		return false;
	}

}

class Board {

}
