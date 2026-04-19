"use client";

import { useOS } from "@/context/OSContext";
import dynamic from "next/dynamic.js";

const Boot = dynamic(()=> import("../components/Boot/Boot.js"))
const Login = dynamic(() => import("../components/Login/Login.js"));
const Desktop = dynamic(() => import("../components/Desktop/Desktop.js"));
const Welcome = dynamic(() => import("../components/Welcome/Welcome.js"));

const Taskbar = dynamic(() => import("../components/Taskbar/Taskbar.js"));
const StartMenu = dynamic(() => import("../components/StartMenu/StartMenu.js"));

export default function Home(){
    const {osState} = useOS();

     console.log("OS STATE IS:", osState);

    if (osState === "booting"){
        return <Boot/>
    }
    if (osState === "login"){
        return <Login/>
    }
    if (osState === "welcome"){
        return <Welcome/>
    }
    if (osState === "desktop"){
        return <Desktop/>
    }

    return null;
}