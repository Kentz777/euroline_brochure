import { useGLTF } from "@react-three/drei";

export default function ArmoredTruck() {
  const { scene } = useGLTF("/models/hiace/scene.gltf");

  return (
    <group
      scale={[0.02, 0.02, 0.02]}
      position={[0, -1, 0]} // lowers the model
      rotation={[0, Math.PI / 4, 0]} // ~45° angle to show front-left
    >
      <primitive object={scene} />
    </group>
  );
}
