import { useRef, useEffect } from 'react';

function Ball({stageWidth, stageHeight, radius, speed}) {
	const canvasRef = useRef(null);
	const contextRef = useRef(null);

	const intervalId = useRef(null);

  //   const handleCanvasResize = () => {
  //       const canvas = canvasRef.current
  //
  //       canvas.width = window.innerWidth;
  //       canvas.height = window.innerHeight;
  // };

	useEffect(() => {
		const cvs = canvasRef.current;
		if (!canvasRef.current) return;
		// cvs FullScreen
		cvs.width = stageWidth;
		cvs.height = stageHeight;

		const ctx = canvasRef.current.getContext('2d');
		if (!ctx) return;
		// ctx.globalCompositeOperation='destination-over';


		// window.addEventListener('resize', handleCanvasResize);
		// handleCanvasResize();

		let r = radius;
		const diameter = radius * 2;
		let x = radius + Math.random() * stageWidth - diameter;
		let y = radius + Math.random() * stageHeight - diameter;
		let dx = speed; //60
		let dy = speed; //60

		contextRef.current = ctx;

		function draw() {
			x += dx;
			y += dy;

			bounceWindow(stageWidth, stageHeight)

			contextRef.current.clearRect(0, 0, stageWidth, stageHeight);
			contextRef.current.beginPath();
			contextRef.current.fillStyle = '#fdd700';
			contextRef.current.arc(x, y, r, 0, 2 * Math.PI);
			contextRef.current.fill();
			contextRef.current.closePath();
		}

		function bounceWindow(stageWidth, stageHeight) {
			const minX = r;
			const maxX = stageWidth - r;
			const minY = r;
			const maxY = stageHeight - r;

			if (x <= minX || x >= maxX) {
				dx *= -1;
				x += dx;
			} else if (y <= minY || y >= maxY) {
				dy *= -1;
				y += dy;
			}
		}
		intervalId.current = setInterval(draw, 10);
		console.log(intervalId.current)

		return () => {
			clearInterval(intervalId.current)
			console.log("clear : ", intervalId.current)
		};
	}, [canvasRef, stageWidth, stageHeight, radius, speed]);

	return (
		<canvas
			ref={canvasRef}
			id="canvasBottom"
		/>
	);

}

export default Ball;
