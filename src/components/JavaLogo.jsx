import { Float, useGLTF } from '@react-three/drei';

const JavaLogo = (props) => {
  const { scene } = useGLTF(import.meta.env.BASE_URL +'models/java.glb');

  return (
    <Float floatIntensity={1}>
      <primitive object={scene} scale={0.01} position={[-9, 7, -4]} {...props} />
    </Float>
  );
};

useGLTF.preload(import.meta.env.BASE_URL +'models/java.glb');

export default JavaLogo;
