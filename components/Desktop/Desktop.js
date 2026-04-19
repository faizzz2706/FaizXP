/*-----------------------------------IMPORTS-----------------------------------------*/

import styles from './Desktop.module.css'
import Taskbar from '../Taskbar/Taskbar'
import StartMenu from '../StartMenu/StartMenu'
import LogShut from '../LogShut/LogShut'
import Openlink from '../Openlink/Openlink'
import { useState } from 'react'
import { useOS } from '@/context/OSContext'
import Windows from '../Windows/Windows'
import PaintApp from '../PaintApp/PaintApp'
export default function Desktop() {
  /*-------------------------STATES--------------------------------------*/

  const [crt, useCrt] = useState(false)
  const [welcome, showWelcome] = useState(false)
  const [startMenu, setStartMenu] = useState(false)
  const [isLogoff, setLogoff] = useState(false)
  const [isShutdown, setShutdown] = useState(false)
  const { restart, logoff } = useOS()
  const [openLinkData, setLinkData] = useState(null)
  const [windows, setWindows] = useState([])

  /*----------------------------FUNCTIONS----------------------------------*/

  const openWindow = (data) => {
    const offset = (windows.length % 10) * 30

    let size = {}

    if (data.type === 'paint') {
      size = { width: 790, height: 600 }
    }

    const newWindow = {
      id: Date.now(),
      type: data.type,
      title: data.title,
      icon: data.icon,
      width: size.width || 400,
      height: size.height || 300,
      top: 100 + offset,
      left: 100 + offset,
      isMinimized: false,
      isMaximized: false,
      zIndex: windows.length + 1,
    }

    setWindows((prev) => [...prev, newWindow])
  }
  const updateWindow = (id, updates) => {
    setWindows((prev) =>
      prev.map((win) => (win.id === id ? { ...win, ...updates } : win))
    )
  }

  const focusWindow = (id) => {
    const maxZ = Math.max(...windows.map((w) => w.zIndex), 0)
    updateWindow(id, { zIndex: maxZ + 1 })
  }

  const minimizeWindow = (id) => {
    updateWindow(id, { isMinimized: true })
  }

  const toggleMaximize = (id) => {
    setWindows((prev) =>
      prev.map((win) => {
        if (win.id !== id) return win

        if (!win.isMaximized) {
          return {
            ...win,
            prevState: {
              width: win.width,
              height: win.height,
              top: win.top,
              left: win.left,
            },
            width: window.innerWidth,
            height: window.innerHeight - 40,
            top: 0,
            left: 0,
            isMaximized: true,
          }
        } else {
          return {
            ...win,
            ...win.prevState,
            isMaximized: false,
          }
        }
      })
    )
  }

  const toggleMinimize = (id) => {
  setWindows(prev =>
    prev.map(win =>
      win.id === id
        ? { ...win, isMinimized: !win.isMinimized }
        : win
    )
  );
};

  const closeWindow = (id) => {
    setWindows((prev) => prev.filter((win) => win.id != id))
  }

  const restoreWindow = (id) => {
    updateWindow(id, { isMinimized: false })
  }
  /*LOG OFF FUNCTION*/
  const handleLogoff = () => {
    setLogoff(true)
    setStartMenu(false)
  }

  /*SHUTDOWN FUNCTION*/
  const handleShutdown = () => {
    setShutdown(true)
    setStartMenu(false)
  }
  const closeLogShut = () => {
    setShutdown(false)
    setLogoff(false)
  }
  const toExit = () => {
    window.location.replace('https://www.google.com')
  }

  /*LINK BUTTON ACTION FUNCTIONS*/
  const linkCancel = () => {
    setLinkData(null)
  }

  const linkVisit = () => {
    window.open(openLinkData.url, '_blank')
    setLinkData(null)
  }

  const handleLinkData = (data) => {
    setLinkData(data)
    setStartMenu(false)
  }

  const isDimmed = isLogoff || isShutdown

  /*----------------------------RENDER----------------------------------*/
  return (
    /*----------------------------DESKTOP MAIN RENDER----------------------------------*/
    <div className={styles.main_container}>
      <div
        className={`${styles.background} ${isDimmed ? styles.grayscale : ''}`}
      />

      <div
        className={`${styles.desktop_content} ${isDimmed ? styles.grayscale : ''}`}
      >
        <div className={styles.icon_wrapper}>
          <div className={styles.icon_text}></div>
          <div className={styles.icon_text}></div>
          <div className={styles.icon_text}></div>
          <div className={styles.icon_text}></div>
        </div>

        {crt && <div className={styles.crt}></div>}

        {/*---------------------------------------OPEN WINDOW----------------------------------*/}

        {windows.map((win) => (
          <Windows
            key={win.id}
            title={win.title}
            icon={win.icon}
            width={win.width}
            height={win.height}
            top={win.top}
            left={win.left}
            zIndex={win.zIndex}
            isMinimized={win.isMinimized}
            onClose={() => closeWindow(win.id)}
            onFocus={() => focusWindow(win.id)}
            onMinimize={() => toggleMinimize(win.id)}
            onMaximize={() => toggleMaximize(win.id)}
            onUpdate={(updates) => updateWindow(win.id, updates)}
          >
            {win.type === 'paint' && <PaintApp />}
          </Windows>
        ))}

        {/*----------------------------WELCOME PUPUP----------------------------------*/}

        {welcome && (
          <div className={styles.welcome_popup}>
            <div className={styles.popup_header}>
              <span>Welcome to FaizXP</span>
              <button onClick={() => showWelcome(false)}>X</button>
            </div>

            <div className={styles.popup_body}>
              A faithful XP-inspired interface, custom-built to showcase my
              work.
              <br />
              Get Started: <a href="#">About Me</a> |{' '}
              <a href="#">My Projects</a>
            </div>
          </div>
        )}

        {/*----------------------------START MENU----------------------------------*/}

        {startMenu && (
          <StartMenu
            handleLogoff={handleLogoff}
            handleShutdown={handleShutdown}
            openLink={handleLinkData}
            openApp={openWindow}
          />
        )}

        {/*----------------------------TASKBAR----------------------------------*/}

        <Taskbar
          windows={windows}
          onRestore={restoreWindow}
          onToggleMinimize={toggleMinimize}
          toggleCRT={() => useCrt((prev) => !prev)}
          toggleWelcome={() => showWelcome((prev) => !prev)}
          toggleStartMenu={() => setStartMenu((prev) => !prev)}
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

      {openLinkData && (
        <Openlink
          icon={openLinkData.icon}
          appName={openLinkData.appName}
          url={openLinkData.url}
          linkCancel={linkCancel}
          linkVisit={linkVisit}
        />
      )}

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
