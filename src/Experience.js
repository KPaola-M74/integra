import { OrbitControls, Html, Text,Float } from '@react-three/drei'
import { Suspense, useRef } from 'react'
import { FrontSide, LinearFilter, VideoTexture } from 'three'


export default function Experience()
{
    //Get your video element(traer el elemento video):
    const video = document.getElementById('video')

    /*
    video.onloadeddata = function () 
    {
        video.play();
    }*/

    const fun = (ho) =>
    {
        if(ho)
        {
            video.play();
        }
        else{
            video.pause();
        }
    }

    //crear el video como textura:
    const videoTexture = new VideoTexture(video);
   /* videoTexture.minFilter = LinearFilter;
    videoTexture.magFilter = LinearFilter;*/
    videoTexture.needsUpdate = true;

    return <>

        <OrbitControls maxPolarAngle = {Math.PI/2} 
        maxDistance = {40} 
        minDistance = {8} 
        makeDefault = {true} 
        mouseButtons-RIGHT = {false}/>

        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />
        <mesh position-y={-0.15} rotation-x={-Math.PI*0.15} position-x={5} rotation-y={-Math.PI*0.5} scale ={10}  >
            <boxGeometry args={[1,1,0.2,2,2,2]} />
            <meshBasicMaterial color='grey'/>
        </mesh>
        <mesh position-y={-0.15} position-x={-5} rotation-x={-Math.PI*0.15} rotation-y={-Math.PI*0.5} scale ={10}  >
            <boxGeometry args={[1,1,0.2,2,2,2]} />
            <meshBasicMaterial map = {videoTexture} side={FrontSide} toneMapped={false} needsUpdate={true} onClick = {fun(true)} />
        </mesh>
    </>
}