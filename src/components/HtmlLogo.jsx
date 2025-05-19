import { Float, useGLTF } from '@react-three/drei';

const HtmlLogo = (props) => {
  const { scene } = useGLTF('models/html.glb');

  return (
    <Float floatIntensity={1}>
      <primitive object={scene} scale={0.01} position={[9, -4, 0]} {...props} />
    </Float>
  );
};

useGLTF.preload('models/html.glb');

export default HtmlLogo;
