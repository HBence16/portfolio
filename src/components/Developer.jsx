import { useGLTF } from '@react-three/drei'
import { useRef } from 'react'

export default function Developer(props) {
  const group = useRef()
  const { scene } = useGLTF(import.meta.env.BASE_URL +'/models/developer.glb')

  return <primitive ref={group} object={scene} {...props} />
}
