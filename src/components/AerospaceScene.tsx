import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { AircraftModel } from './AircraftModel';

export const AerospaceScene = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [5, 2, 5], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.3} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1}
          color="#A8B0C2"
        />
        <pointLight 
          position={[-10, -10, -10]} 
          intensity={0.5}
          color="#8B0000"
        />
        
        {/* Stars background */}
        <Stars 
          radius={100} 
          depth={50} 
          count={1000} 
          factor={4} 
          saturation={0.5} 
          fade 
          speed={0.5}
        />
        
        {/* Aircraft Model */}
        <AircraftModel />
        
        {/* Controls */}
        <OrbitControls 
          enablePan={false}
          enableZoom={false}
          enableRotate={true}
          autoRotate
          autoRotateSpeed={0.5}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  );
};