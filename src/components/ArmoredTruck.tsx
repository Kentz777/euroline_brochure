import { useGLTF } from "@react-three/drei";

export default function ArmoredTruck() {
  const { scene } = useGLTF("/models/armored_truck/scene.gltf");

  return (
    <group
      scale={[0.01, 0.01, 0.01]}
      position={[0, -1, 0]}
      rotation={[0, Math.PI / 2, 0]}
    >
      <primitive object={scene} />
    </group>
  );
}
