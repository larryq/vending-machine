import "./style.css";
import React, { Suspense, useRef } from "react";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import { Stage } from "@react-three/drei";
import App from "./App.jsx";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
// const ref = useRef();
// const cameraControlsRef = useRef();
// root.render(
//   <Canvas
//     flat
//     camera={{
//       fov: 45,
//       near: 0.1,
//       far: 50,
//       position: [1, 2, 6],
//     }}
//   >
//     <color args={["#030202"]} attach="background" />
//     <Stage controls={ref} preset="portrait" intensity={1.5} environment={false}>
//       <Experience />
//     </Stage>
//   </Canvas>
// );
