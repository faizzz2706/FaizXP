import { useOS } from "@/context/OSContext"
import useBootTimer from "../../hooks/useBootTimer.js"

export default function Boot(){

    const {finishBoot} = useOS();

    useBootTimer(finishBoot, 5000)
    return (
        <h1 className="">
            booting 
        </h1>
    ) 
}