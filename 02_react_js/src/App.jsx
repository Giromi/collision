import { useRef, useEffect } from 'react';
import Pen from './Pen';
// import Handler from './Handler';
import Ball from './Ball';

function App() {
	const canvasRef = useRef(null);

	useEffect(() => {
		if (canvasRef.current) {
			const canvas = canvasRef.current;

			// Canvas FullScreen
			canvas.width = document.body.clientWidth
			canvas.height = document.body.clientHeight
			console.log(window.innerWidth, canvas.width)
		}
	}, [canvasRef]);
    //
	return (
		<>
			<Pen
				canvasRef={canvasRef}
			/>
			<Ball
				canvasRef={canvasRef}
				stageWidth={document.body.clientWidth}
				stageHeight={document.body.clientHeight}
				radius={60}
				speed={15}
			/>
		</>
	);
}
export default App;
			// <canvas
			//     ref={canvasRef}
			// />
			// <Ball
			//     canvasRef={canvasRef}
			//     contextRef={contextRef}
			//     stageWidth={document.body.clientWidth}
			//     stageHeight={document.body.clientHeight}
			//     radius={60}
			//     speed={15}
