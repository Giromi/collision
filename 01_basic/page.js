'use client';

import { App } from './App.js'
import { useEffect } from "react";

function UseEffect() {
  useEffect(() => {
	console.log("컴포넌트 나타남");
	new App();
	return () => {
	  console.log("cleanUp 함수");
	};
  });
  return (
	<div></div>
  );
}

export default function Home() {
	useEffect( () => {
		window.onload = function() {
			console.log("컴포넌트 나타남");
			new App();
		}
	})
	return (
		<>
		<h1>My collision</h1>
		</>
	)
}
		// <UseEffect />
