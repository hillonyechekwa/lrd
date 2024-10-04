import { useEffect, useState } from 'react';


interface Breakpoints {
    breakpoints: number[]
}

export const useResponsive = (breakpoints : Breakpoints) => {
    const [index, setIndex] = useState(0);


    useEffect(() => {
        const updateIndex = () => {
            const width = window.innerWidth;
            const newIndex: number = breakpoints.breakpoints.findIndex((bp: number) => width <= bp);
            setIndex(newIndex === -1 ? breakpoints.breakpoints.length - 1 : newIndex);
        }

        updateIndex();
        window.addEventListener("resize", updateIndex);
        return () => window.removeEventListener("resize", updateIndex)
    },[breakpoints])

    return index
}