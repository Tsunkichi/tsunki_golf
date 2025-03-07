import React from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { GolfBall3D } from './GolfBall3D';
import * as THREE from 'three';

function CameraControls() {
    const { camera } = useThree();
    React.useEffect(() => {
        camera.position.set(0, 0, 6);
        camera.lookAt(0, 0, 0);
    }, [camera]);
    return null;
}

export function GolfBallScene() {
    return (
        <div className="w-full h-[400px] relative bg-dark-200/50">
            <Canvas
                style={{ background: 'transparent' }}
                gl={{ antialias: true }}
            >
                <CameraControls />
                <ambientLight intensity={1.5} />
                <directionalLight position={[10, 10, 5]} intensity={2.5} />
                <pointLight position={[-10, -10, -5]} intensity={1.5} />
                <GolfBall3D />
                {/* Background gradient */}
                <mesh position={[0, 0, -5]}>
                    <planeGeometry args={[20, 20]} />
                    <meshBasicMaterial color="#1a1a1a" transparent opacity={0.95} />
                </mesh>
            </Canvas>
        </div>
    );
} 