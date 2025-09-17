import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';

export const AircraftModel = () => {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.1;
    }
  });

  return (
    <group ref={groupRef} scale={[0.8, 0.8, 0.8]}>
      {/* Main Fuselage */}
      <mesh position={[0, 0, 0]}>
        <coneGeometry args={[0.3, 3, 8]} />
        <meshPhongMaterial 
          color="#A8B0C2" 
          transparent 
          opacity={0.7}
          wireframe={false}
        />
      </mesh>
      
      {/* Wings */}
      <mesh position={[0, -0.1, -0.5]} rotation={[0, 0, Math.PI / 2]}>
        <boxGeometry args={[0.1, 2.5, 0.8]} />
        <meshPhongMaterial 
          color="#A8B0C2" 
          transparent 
          opacity={0.6}
          wireframe={true}
        />
      </mesh>
      
      {/* Tail Fins */}
      <mesh position={[0, 0.3, -1.2]} rotation={[0, 0, 0]}>
        <boxGeometry args={[0.05, 0.8, 0.4]} />
        <meshPhongMaterial 
          color="#8B0000" 
          transparent 
          opacity={0.8}
        />
      </mesh>
      
      <mesh position={[0, -0.1, -1.2]} rotation={[Math.PI / 2, 0, 0]}>
        <boxGeometry args={[0.05, 0.4, 0.6]} />
        <meshPhongMaterial 
          color="#8B0000" 
          transparent 
          opacity={0.8}
        />
      </mesh>
      
      {/* Cockpit */}
      <mesh position={[0, 0.2, 0.8]}>
        <sphereGeometry args={[0.15, 8, 6]} />
        <meshPhongMaterial 
          color="#A8B0C2" 
          transparent 
          opacity={0.3}
        />
      </mesh>
    </group>
  );
};