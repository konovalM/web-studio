import {MainWaveAnimationTag} from "./MainWaveAnimation.styles";
import {useEffect, useRef, useState} from "react";
import useWindowHeight from "../../hooks/useWindowHeight";
import svgTablet from '../../images/main/bubblesTablet.svg'
import svgMobile from '../../images/main/bubblesMobile.svg'
const bubbles = [
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },
    {
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
    },

]

const MainWaveAnimation = () => {
    const ref = useRef()
    const [animHeight, setAnimHeight] = useState(0)
    const height = useWindowHeight()
    useEffect(() => {
        setAnimHeight(ref.current.offsetHeight)
    }, [height])
    return (
        <MainWaveAnimationTag height={animHeight}>
            <div className="desktop">
                <div ref={ref} className="wrapperAnimation">
                    <div className="bubbles">
                        {
                            bubbles.map((bubble, index) => {
                                return (
                                    <div className='bubble' style={{
                                        '--size': bubble.size,
                                        '--distance': bubble.distance,
                                        '--position': bubble.position,
                                        '--time': bubble.time,
                                        '--delay': bubble.delay,
                                    }} key={index}/>
                                )}
                            )
                        }
                    </div>
                </div>
                <svg style={{position: 'fixed', top: '100vh'}}>
                    <defs>
                        <filter id="blob">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="blob"></feColorMatrix>
                        </filter>
                    </defs>
                </svg>
            </div>
            <div className="tablet">
                <img src={svgTablet} alt="staticAnimation"/>
            </div>
            <div className="mobile">
                <img src={svgMobile} alt="staticAnimation"/>
            </div>
        </MainWaveAnimationTag>
    );
};

export default MainWaveAnimation;