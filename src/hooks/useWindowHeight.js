import { useState, useEffect } from "react";

function useWindowHeight() {
    const [windowSize, setWindowSize] = useState(undefined)
    useEffect(() => {
        function handleResize() {
            setWindowSize(window.innerHeight)
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}

export default useWindowHeight;