const SNAKEWIDTH = 30;
let SIRKAPOLE;

let hadi = [];
let jidlo;

function setup() {
	createCanvas(660, 660);
	SIRKAPOLE = width / SNAKEWIDTH;
	background("black");
	hadi.push(new Had(5, 5, [37, 38, 39, 40], color(255, 0, 0)));
	dejJidlo();
	hadi.push(new Had(20, 20, [65, 87, 68, 83], color(0, 255, 0)));
	frameRate(5);
}

function draw() {
	background("black");
	for (let had of hadi) {
		had.move();
		had.show();
		had.sezer();
		had.narazil();
	}
	fill("yellow");
	rect(jidlo.x * SNAKEWIDTH, jidlo.y * SNAKEWIDTH, SNAKEWIDTH, SNAKEWIDTH);
}

function keyPressed() {
	for (let had of hadi) {
		if (keyIsDown(had.movement[0])) {
			had.smer = 1;
		} else if (keyIsDown(had.movement[1])) {
			had.smer = 2;
		} else if (keyIsDown(had.movement[2])) {
			had.smer = 3;
		} else if (keyIsDown(had.movement[3])) {
			had.smer = 4;
		}
	}
}

function dejJidlo() {
	jidlo = { x: floor(random(SIRKAPOLE)), y: floor(random(SIRKAPOLE)) };
}
