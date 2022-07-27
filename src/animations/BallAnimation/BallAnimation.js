import React from 'react';
import {useEffect, useRef} from "react";
import styled from 'styled-components'

const Ball = styled.div`
    width: 420px;
    height: 420px;
    margin-top: -40px;
    @media (max-width: 1024px){
        width: 350px;
        height: 350px;
    }
    @media (max-width: 750px){
        width: 250px;
        height: 250px;
    }
    @media (max-width: 450px){
        width: 220px;
        height: 220px;
        margin: -20px 0 10px;
    }
`

const BallAnimation = () => {

    const canvass = useRef()

    useEffect(() => {
        const canvas = canvass.current
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
// Store the 2D context
        const ctx = canvas.getContext('2d');

        if (window.devicePixelRatio > 1) {
            canvas.width = canvas.clientWidth * 2;
            canvas.height = canvas.clientHeight * 2;
            ctx.scale(2, 2);
        }

        let width = canvas.clientWidth; // Width of the canvas
        let height = canvas.clientHeight; // Height of the canvas
        let rotation = 0; // Rotation of the globe
        let dots = []; // Every dots in an array

        const DOTS_AMOUNT = 1000; // Amount of dots on the screen
        const DOT_RADIUS = 3; // Radius of the dots
        let GLOBE_RADIUS = width * 0.85; // Radius of the globe
        let GLOBE_CENTER_Z = -GLOBE_RADIUS; // Z value of the globe center
        let PROJECTION_CENTER_X = width / 2; // X center of the canvas HTML
        let PROJECTION_CENTER_Y = height / 2; // Y center of the canvas HTML
        let FIELD_OF_VIEW = width * 0.8;

        class Dot {
            constructor(x, y, z) {
                this.x = x;
                this.y = y;
                this.z = z;

                this.xProject = 0;
                this.yProject = 0;
                this.sizeProjection = 0;
            }

            project(sin, cos) {
                const rotX = cos * this.x + sin * (this.z - GLOBE_CENTER_Z);
                const rotZ = -sin * this.x + cos * (this.z - GLOBE_CENTER_Z) + GLOBE_CENTER_Z;
                this.sizeProjection = FIELD_OF_VIEW / (FIELD_OF_VIEW - rotZ);
                this.xProject = (rotX * this.sizeProjection) + PROJECTION_CENTER_X;
                this.yProject = (this.y * this.sizeProjection) + PROJECTION_CENTER_Y;
            }

            draw(sin, cos) {
                this.project(sin, cos);
                ctx.beginPath();
                ctx.arc(this.xProject, this.yProject, DOT_RADIUS * this.sizeProjection, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
            }
        }

        function createDots() {
            dots.length = 0;

            for (let i = 0; i < DOTS_AMOUNT; i++) {
                const theta = Math.random() * 2 * Math.PI; // Random value between [0, 2PI]
                const phi = Math.acos((Math.random() * 2) - 1); // Random value between [-1, 1]
                const x = GLOBE_RADIUS * Math.sin(phi) * Math.cos(theta);
                const y = GLOBE_RADIUS * Math.sin(phi) * Math.sin(theta);
                const z = (GLOBE_RADIUS * Math.cos(phi)) + GLOBE_CENTER_Z;
                dots.push(new Dot(x, y, z));
            }
        }

        function render(a) {
            // Clear the scene
            ctx.clearRect(0, 0, width, height);

            rotation = a * 0.0004;

            const sineRotation = Math.sin(rotation); // Sine of the rotation
            const cosineRotation = Math.cos(rotation); // Cosine of the rotation

            for (var i = 0; i < dots.length; i++) {
                dots[i].draw(sineRotation, cosineRotation);
            }

            window.requestAnimationFrame(render);
        }
        createDots();

        window.requestAnimationFrame(render);
    }, [])


    return (
        <Ball>
            <canvas id="scene" ref={canvass} style={{ width: '100%', height: '100%'}}></canvas>
        </Ball>
    );
};

export default BallAnimation;