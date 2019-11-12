class Had {
	constructor(x, y, movement, barva = color(255, 255, 255)) {
		this.x = x;
		this.y = y;
		this.movement = movement;
		this.smer = 0;
		this.barva = barva;
		this.ocas = [];
		this.delkaHada = 1;
		this.score = 0;
		this.willDie = false;
	}
	show() {
		fill(this.barva);
		rect(
			1 + this.x * SNAKEWIDTH,
			1 + this.y * SNAKEWIDTH,
			SNAKEWIDTH - 2,
			SNAKEWIDTH - 2
		);

		for (let { x, y } of this.ocas) {
			fill(this.barva);

			rect(
				1 + x * SNAKEWIDTH,
				1 + y * SNAKEWIDTH,
				SNAKEWIDTH - 2,
				SNAKEWIDTH - 2
			);
		}
	}
	move() {
		this.ocas.push({ x: this.x, y: this.y });
		while (this.ocas.length > this.delkaHada) {
			this.ocas.splice(0, 1);
		}

		switch (this.smer) {
			case 1:
				this.x--;
				break;
			case 2:
				this.y--;
				break;
			case 3:
				this.x++;
				break;
			case 4:
				this.y++;
				break;
		}
		this.WallFlip();
	}
	WallFlip() {
		if (this.x > SIRKAPOLE) {
			this.x = 0;
		}
		if (this.y > SIRKAPOLE) {
			this.y = 0;
		}
		if (0 > this.x) {
			this.x = SIRKAPOLE - 1;
		}
		if (0 > this.y) {
			this.y = SIRKAPOLE - 1;
		}
	}
	sezer() {
		if (this.x === jidlo.x && this.y === jidlo.y) {
			this.score++;
			dejJidlo();
			this.delkaHada++;
		}
	}
	narazil() {
		for (let had of hadi) {
			if (had === this) {
				for (let { x, y } of had.ocas) {
					if (x === had.x && y === had.y) {
						this.willDie = true;
						this.ocas = [];
						this.delkaHada = 0;
					}
				}
			} else {
				for (let { x, y } of had.ocas) {
					if (x === had.x && y === had.y) {
						this.willDie = true;
						this.ocas = [];
						this.delkaHada = 0;
					}
					// if(){}
				}
				if (this.x === had.x && this.y === had.y) {
					this.willDie = true;
					this.ocas = [];
					this.delkaHada = 0;
				}
			}
		}
	}
	die() {
		// if(this.)
		// this.ocas = []
	}
}
