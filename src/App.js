import React, {forwardRef, Suspense} from 'react';
import {Canvas} from '@react-three/fiber';
import {OrbitControls, Html} from '@react-three/drei';
import AnimatedAvatar from './Components/Avatar/AnimatedAvatar'

function App() {
    return (
        <Canvas
            camera={{position: [2, 0, 12.25], fov: 15}}
            style={{
                backgroundColor: '#111a21',
                width: '100vw',
                height: '100vh',
            }}
        >
            <Tag position={[0.1, -1.4, 7]} description="Barba Roja" />
            <ambientLight intensity={1.25}/>
            <ambientLight intensity={0.1}/>
            <directionalLight intensity={0.4}/>
            <Suspense fallback={null}>
                <AnimatedAvatar position={[0.025, -0.9, 0]}/>
            </Suspense>
            <OrbitControls/>
        </Canvas>
    );
}

const Tag = forwardRef(({description, ...props}, ref) => {
    return (
        <Html ref={ref} className="description" center {...props}>
            <p>{description}</p>
        </Html>
    )
})
export default App;
