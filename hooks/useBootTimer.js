import { useEffect } from "react";

export default function useBootTimer(onFinish, duration = 5000) {
    useEffect(()=>{
        const timerID = setTimeout(()=>{
            onFinish();
        }, duration);

        return ()=>{
            clearTimeout(timerID);
        };
    }, [onFinish, duration]);
}