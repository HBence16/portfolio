import { Float, useGLTF } from '@react-three/drei';

const HtmlLogo = (props) => {
  const { scene } = useGLTF(import.meta.env.BASE_URL +'models/html.glb');

  return (
    <Float floatIntensity={1}>
      <primitive object={scene} scale={0.01} position={[9, -4, 0]} {...props} />
    </Float>
  );
};

useGLTF.preload(import.meta.env.BASE_URL +'models/html.glb');

export default HtmlLogo;
