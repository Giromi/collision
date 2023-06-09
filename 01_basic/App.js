import { Ball } from './Ball.js';

export class App {
	constructor() {
		this.canvas = document.createElement('canvas');
		this.ctx = this.canvas.getContext('2d');

		document.body.appendChild(this.canvas);

		// 현재 내가 만들고자 하는 애니메이션 크기
		window.addEventListener('resize', this.resize.bind(this), false);
		this.resize();

		this.ball = new Ball(this.stageWidth, this.stageHeight, 60, 15);
		this.block = new Block(700, 30, 300, 450);

		window.requestAnimationFrame(this.animate.bind(this));
	}

	resize() {
		this.stageWidth = document.body.clientWidth;
		this.stageHeight = document.body.clientHeight;

		this.canvas.width = this.stageWidth * 2;
		this.canvas.height = this.stageHeight * 2;
		this.ctx.scale(2, 2);
	}

	animate(t) {
		window.requestAnimationFrame(this.animate.bind(this));

		this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
		this.ball.draw(this.ctx, this.stageWidth, this.stageHeight);
		this.block.draw(this.ctx);
	}
}


window.onload = () => {
	new App();
}
