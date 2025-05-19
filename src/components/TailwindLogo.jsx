import { Float, useGLTF } from '@react-three/drei';

const TailwindLogo = (props) => {
  const { scene } = useGLTF('models/tailwindcss.glb');

  return (
    <Float floatIntensity={1}>
      <primitive object={scene} scale={0.0051} position={[-9, 1, 0]} {...props} />
    </Float>
  );
};

useGLTF.preload('models/tailwindcss.glb');

export default TailwindLogo;
