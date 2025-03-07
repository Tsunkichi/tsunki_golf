import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function GolfBall3D() {
    const meshRef = useRef<THREE.Mesh>(null);

    useEffect(() => {
        if (meshRef.current) {
            // Ensure the mesh is visible
            meshRef.current.visible = true;
            // Center the mesh
            meshRef.current.position.set(0, 0, 0);
        }
    }, []);

    useFrame((state, delta) => {
        if (meshRef.current) {
            // Smooth rotation animation with slight wobble
            meshRef.current.rotation.x += delta * 0.15;
            meshRef.current.rotation.y += delta * 0.25;
            meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime) * 0.05;
        }
    });

    return (
        <mesh ref={meshRef} scale={[2.5, 2.5, 2.5]}>
            <sphereGeometry args={[1, 64, 64]} />
            <meshStandardMaterial
                color="#ffffff"
                roughness={0.7}
                metalness={0.2}
                envMapIntensity={1.2}
                transparent={false}
                opacity={1}
            />
        </mesh>
    );
} 