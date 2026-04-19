/*-----------------------------------IMPORTS-----------------------------------------*/

import styles from "./Desktop.module.css"
import Taskbar from "../Taskbar/Taskbar";
import StartMenu from "../StartMenu/StartMenu"
import LogShut from "../LogShut/LogShut"
import Openlink from "../Openlink/Openlink"
import { useState } from "react";
import { useOS } from "@/context/OSContext";

export default function Desktop() {
/*-------------------------STATES--------------------------------------*/
    const [crt, useCrt] = useState(false);
    const [welcome, showWelcome] = useState(false);
    const [startMenu, setStartMenu] = useState(false);
    const [isLogoff, setLogoff] = useState(false)
    const [isShutdown, setShutdown] = useState(false)
    const { restart, logoff } = useOS();
    const [openLinkData, setLinkData] = useState(null)

/*----------------------------FUNCTIONS----------------------------------*/
    





/*LOG OFF FUNCTION*/
const handleLogoff = () => {
        setLogoff(true);
        setStartMenu(false);
    }
/*SHUTDOWN FUNCTION*/
    const handleShutdown = () => {
        setShutdown(true);
        setStartMenu(false);
    }
    const closeLogShut = () => {
        setShutdown(false);
        setLogoff(false);
    }
    const toExit = () => {
        window.location.replace("https://www.google.com")
    }
/*LINK BUTTON ACTION FUNCTIONS*/
    const linkCancel = () => {
        setLinkData(null)
    }

    const linkVisit = () => {
        window.open(openLinkData.url, "_blank")
        setLinkData(null)
    }

    const handleLinkData = (data) => {
        setLinkData(data);
        setStartMenu(false);
    }

    const isDimmed = isLogoff || isShutdown;

/*----------------------------RENDER----------------------------------*/
    return (
        
/*----------------------------DESKTOP MAIN RENDER----------------------------------*/
        <div className={styles.main_container}>
            <div className={`${styles.background} ${isDimmed ? styles.grayscale : ""}`} />

            <div className={`${styles.desktop_content} ${isDimmed ? styles.grayscale : ""}`}>

                <div className={styles.icon_wrapper}>
                    <div className={styles.icon_text}></div>
                    <div className={styles.icon_text}></div>
                    <div className={styles.icon_text}></div>
                    <div className={styles.icon_text}></div>
                </div>

                {crt && <div className={styles.crt}></div>}
{/*----------------------------WELCOME PUPUP----------------------------------*/}
                {welcome && (
                    <div className={styles.welcome_popup}>
                        <div className={styles.popup_header}>
                            <span>Welcome to FaizXP</span>
                            <button onClick={() => showWelcome(false)}>X</button>
                        </div>

                        <div className={styles.popup_body}>
                            A faithful XP-inspired interface, custom-built to showcase my work.
                            <br />
                            Get Started: <a href="#">About Me</a> | <a href="#">My Projects</a>
                        </div>
                    </div>
                )}
{/*----------------------------START MENU----------------------------------*/}
                {startMenu && (
                    <StartMenu
                        handleLogoff={handleLogoff}
                        handleShutdown={handleShutdown}
                        openLink={handleLinkData}
                    />
                )}
{/*----------------------------TASKBAR----------------------------------*/}
                <Taskbar
                    toggleCRT={() => useCrt(prev => !prev)}
                    toggleWelcome={() => showWelcome(prev => !prev)}
                    toggleStartMenu={() => setStartMenu(prev => !prev)}
                />
            </div>
{/*----------------------------LOGOFF POPUP----------------------------------*/}
            {isLogoff && (
                <LogShut
                    closeLogShut={closeLogShut}
                    text="Log Off"
                    icon1="/restart.webp"
                    text1="Restart"
                    icon2="/logoff.webp"
                    text2="Log Off"
                    onPrimary={restart}
                    onSecondary={logoff}
                />
            )}
{/*-------------------------------------OPEN LINK PUPUP----------------------------------*/}
            {openLinkData &&
                <Openlink
                    icon={openLinkData.icon}
                    appName={openLinkData.appName}
                    url={openLinkData.url}
                    linkCancel={linkCancel}
                    linkVisit={linkVisit}
                />}
{/*---------------------------------------SHUTDOWN PUPUP----------------------------------*/}
            {isShutdown && (
                <LogShut
                    closeLogShut={closeLogShut}
                    text="Shut Down"
                    icon1="/restart.webp"
                    text1="Restart"
                    icon2="/shutdown.webp"
                    text2="Shut Down"
                    onPrimary={restart}
                    onSecondary={toExit}
                />
            )}

        </div>
    )
}