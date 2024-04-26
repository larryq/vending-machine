import "./style.css";
import React, { Suspense, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Stage,
  CameraControls,
  FlyControls,
  Ring,
  Environment,
  useTexture,
  useProgress,
  Html,
  Text,
  ScreenSpace,
  Box,
} from "@react-three/drei";

import Experience from "./Experience.jsx";

export default function App() {
  const ref = useRef();
  const cameraControlsRef = useRef();

  function Loader() {
    const { active, progress, errors, item, loaded, total } = useProgress();
    return <Html center>{progress} % loaded</Html>;
  }

  function Loader2() {
    return (
      <Html>
        <div className="loading">Loading...</div>
      </Html>
    );
  }

  function Loader3() {
    return (
      <Html>
        <div id="loading-dialog" class="hidden">
          <img src="loading image.jpeg" alt="Loading..." id="loading-image" />
        </div>
      </Html>
    );
  }

  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [7.5, 1.5, -17], fov: 55 }}
    >
      <directionalLight castShadow position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />
      <color attach="background" args={["white"]} />
      <Suspense fallback={<Loader3 />}>
        <Stage
          controls={ref}
          preset="portrait"
          intensity={1.0}
          environment={false}
        >
          <Experience />
        </Stage>
      </Suspense>

      <CameraControls
        //target={[7, -12, 0]}
        //position={[-51, 15, 0]}
        ref={cameraControlsRef}
        minDistance={0}
        maxDistance={200}
        enabled={true}
        verticalDragToForward={true}
        dollySpeed={0.31}
        dollyToCursor={true}
        infinityDolly={true}
        makeDefault={false}
      />
    </Canvas>
  );
}
