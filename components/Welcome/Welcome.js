import { useOS } from "@/context/OSContext"
import useBootTimer from "../../hooks/useBootTimer.js"

export default function Welcome(){
    const {welcome} = useOS();
    useBootTimer(welcome, 3000)
    return (
        <h1>
            welcome
        </h1>
    )
}