import { Float, useGLTF } from '@react-three/drei';

const CssLogo = (props) => {
  const { scene } = useGLTF(import.meta.env.BASE_URL +'models/css.glb');

  return (
    <Float floatIntensity={1}>
      <primitive object={scene} scale={0.005} position={[0, -4, 9]} {...props} />
    </Float>
  );
};

useGLTF.preload(import.meta.env.BASE_URL +'models/css.glb');

export default CssLogo;
