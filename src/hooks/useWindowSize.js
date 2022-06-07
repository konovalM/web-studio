import React, {useEffect, useState} from "react";

function useWindowSize() {
    const [width, setWidth] = useState(window.innerWidth)
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
    }, [])
    return width
}

export default useWindowSize