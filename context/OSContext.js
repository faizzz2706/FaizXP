"use client"

import { createContext, useContext, useState, useEffect } from "react";

const OSContext = createContext(null);

export function OSProvider({children}) {
    const [osState, setosState] = useState("booting");

    const finishBoot = () =>{
        setosState("login");
    }

    const login = ()=>{
        setosState("welcome");
    }

    const welcome =()=>{
        setosState("desktop");
    }
    const restart = ()=>{
        setosState("booting");
    }
    const logoff = ()=>{
        setosState("login")
    }
    useEffect(() => {
  console.log("OS STATE:", osState);
}, [osState]);
    return (
        <OSContext.Provider
        value={{
            osState,
            finishBoot,
            login,
            welcome,
            restart,
            logoff,
        }}
        >
            {children}
        </OSContext.Provider>
    );
}

export function useOS(){
    const context = useContext(OSContext);

    if(!context){
        throw new Error("useOS must be inside OSProvider");
    }

    return context;
}