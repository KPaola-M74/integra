import { OrbitControls, Html, Text,Float } from '@react-three/drei'
import { Suspense, useRef } from 'react'
import { FrontSide, LinearFilter, VideoTexture } from 'three'
import { TextureLoader } from 'three';
import * as THREE from 'three';
import React, { useState } from 'react';


export default function Experience()
{
    //Get your video element(traer el elemento video):
    const video = document.getElementById('video')
    const videoTexture = new VideoTexture(video);
    videoTexture.needsUpdate = true;
    const [playing, setPlaying] = useState(false);
   

    const handlePlayClick = () => {
      const video = document.getElementById('video');
      video.muted = false; // Activa el sonido
      video.play();
      setPlaying(true);
    };
  
    const handlePauseClick = () => {
      const video = document.getElementById('video');
  
      video.pause();
      setPlaying(false);
    };
   
    const mesh = useRef();

    const images = [
        '1.jpeg',
        '2.jpeg',
        '3.jpeg',
        '4.jpeg',
        '5.jpeg',
      ];
      //capturar el numero de click
      const [numClicks, setNumClicks] = useState(0);
      
      
      //evento del clik
      const handleBoxClick2 = () => {
      setNumClicks(prevNumClicks => prevNumClicks + 1);
        console.log(numClicks);
        const textureLoader = new THREE.TextureLoader();
        const texture = textureLoader.load(`/${numClicks % 5 + 1}.jpeg`);        
        mesh.current.material.map = texture;
        mesh.current.material.needsUpdate = true;
      };

    return <>

        <OrbitControls maxPolarAngle = {Math.PI/2} 
        maxDistance = {40} 
        minDistance = {8} 
        makeDefault = {true} 
        mouseButtons-RIGHT = {false}/>

        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />
        <mesh
        ref={mesh}
       
        position-y={-0.15} 
        rotation-x={-Math.PI*0.15} 
        position-x={5} 
        rotation-y={-Math.PI*0.5} 
        scale ={10}  
        onPointerDown={(event) => handleBoxClick2(event)}
        
        
        
        >
        
        
        
            <boxGeometry args={[1,1,0.2,2,2,2]} />
            <meshBasicMaterial color='grey'/>
            
        
        </mesh>
         <mesh 
        position-y={-0.15} 
        position-x={-5} 
        rotation-x={-Math.PI*0.15} 
        rotation-y={-Math.PI*0.5} scale ={10}  
        onPointerDown={(event) => handlePlayClick(event)}>
        <boxGeometry args={[1,1,0.2,2,2,2]}  />
        <meshBasicMaterial map={videoTexture} side={FrontSide} toneMapped={false} needsUpdate={true}  />
    </mesh>
    </>
}