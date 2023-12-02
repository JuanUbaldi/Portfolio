import React from "react";
import { Image, PerspectiveCamera, RenderTexture } from "@react-three/drei";

const Cube = (props) => {
  return (
    <mesh>
      <boxGeometry args={[4, 3.5, 3.5]} />
      <meshStandardMaterial>
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 2]} />
          <color attach="background" args={["gray"]} />

          <Image url={props.image} scale={[3, 1.5, 3]} />
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
};

export default Cube;
