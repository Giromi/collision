import { useRef, useState, useEffect } from 'react';
//
function Pen() {
	const canvasRef = useRef(null);
	const contextRef = useRef(null);
	const [isDrawing, setIsDrawing] = useState(false);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		const context = canvasRef.current.getContext('2d');
		if (!context) return;
		context.lineCap = 'round';
		context.strokeStyle = 'white';
		context.lineWidth = 8;
		contextRef.current = context;
	}, [canvasRef]);

	const startDrawing = ({ nativeEvent }) => {
		const { offsetX, offsetY } = nativeEvent;
		console.log("start drawing : ", offsetX, offsetY)
		contextRef.current.beginPath();
		contextRef.current.moveTo(offsetX, offsetY);
		// contextRef.current.lineTo(offsetX, offsetY);
		// contextRef.current.stroke();
		setIsDrawing(true);
		nativeEvent.preventDefault();
	}

	const draw = ({ nativeEvent }) => {
		if (!isDrawing) return;
		const { offsetX, offsetY } = nativeEvent;
		console.log("drawing : ", offsetX, offsetY)
		contextRef.current.lineTo(offsetX, offsetY);
		contextRef.current.stroke();
		nativeEvent.preventDefault();
	}


	const finishDrawing = () => {
		contextRef.current.closePath();
		setIsDrawing(false);
	}

	return (
		<canvas
			id="canvasTop"
			ref={canvasRef}
			onMouseDown={startDrawing}
			onMouseMove={draw}
			onMouseUp={finishDrawing}>
		</canvas>
	)
}

export default Pen;

// ------------------------------------------------------------
