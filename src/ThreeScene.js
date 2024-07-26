import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeScene = ({ onOpen }) => {
    const mountRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        camera.position.z = 5;

        const animate = () => {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
        };

        animate();

        return () => {
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return (
        <div ref={mountRef} onClick={onOpen} style={{ width: '100%', height: '100vh', cursor: 'pointer' }}>
            <button style={{ position: 'absolute', top: '50%', left: '45%', zIndex: 1 }}>Yes</button>
            <button style={{ position: 'absolute', top: '50%', left: '55%', zIndex: 1 }}>No</button>
        </div>
    );
};

export default ThreeScene;
