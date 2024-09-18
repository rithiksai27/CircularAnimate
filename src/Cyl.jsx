import { useTexture } from "@react-three/drei";
import { useRef } from "react"; // Import useRef from React
import { useFrame } from "@react-three/fiber"; // Import useFrame for animation
import * as THREE from "three";

const Cyl = () => {
  const tex = useTexture("./project.jpg"); 
  const cyl = useRef(null); // Use useRef for the mesh reference

  useFrame((state, delta) => {
    if (cyl.current) {
      cyl.current.rotation.y += delta; // Rotate the cylinder
    }
  });

  return (
    <group rotation={[0, 1.4, 0.5]}>
      <mesh ref={cyl}>
        <cylinderGeometry args={[2, 2, 2, 60, 60, true]} />
        <meshStandardMaterial map={tex} transparent={true} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
};

export default Cyl;
