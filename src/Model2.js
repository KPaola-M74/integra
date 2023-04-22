import { useRef } from "react";
import { useGLTF,useAnimations} from "@react-three/drei";
import { useEffect } from "react";

export default function Model2() {
  
  const fox = useGLTF("/static/Fox.glb");
  const animations = useAnimations(fox.animations,fox.scene)
  useEffect(()=>{

      const action = animations.actions.Walk
      action.play()
  },[]

  )
  
  return <primitive
      object={fox.scene}
      scale={0.02}
      position={[-2,-1.05,2]}
      rotation-y={0.3}
  />
}


