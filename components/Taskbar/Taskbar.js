'use client'
import styles from './Taskbar.module.css'
import TrayIcon from '../TrayIcon/TrayIcon.js'
import { useEffect, useState } from 'react'

export default function Taskbar({
  crt,
  windows,
  focusedZIndex,
  onToggleMinimize,
  toggleCRT,
  toggleWelcome,
  toggleStartMenu,
}) {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const togglefullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
    } else {
      document.exitFullscreen()
    }
  }
  return (
    <div className={styles.taskbar}>
      <div className={styles.left}>
        <button className={styles.start_button} onClick={toggleStartMenu}>
          <img src="/start-button.webp" alt="start"></img>
        </button>
        <div className={styles.middle}>
          {windows.map((win) => {
            const isFocused =
              !win.isMinimized && win.zIndex === focusedZIndex

            return (
              <div
                key={win.id}
                onClick={() => onToggleMinimize(win.id)}
                className={`${styles.task_button} ${
                  win.isMinimized || !isFocused
                    ? styles.minimized
                    : styles.active
                }`}
              >
                <img
                  src={win.icon}
                  style={{ width: '14px', marginRight: '5px' }}
                />
                <span className={styles.tab}>{win.title}</span>
              </div>
            )
          })}
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.tray_content}>
          <TrayIcon
            icon="/welcome.webp"
            text="Click to view 'Welcome'"
            onClick={toggleWelcome}
          />
          <TrayIcon
            icon={crt ? '/crt.webp' : '/crt-off.webp'}
            text="Toggle CRT"
            onClick={toggleCRT}
          />
          <TrayIcon
            icon="/fullscreen.webp"
            text="Toggle Fullscreen"
            onClick={togglefullscreen}
          />
        </div>
        <div className={styles.time}>
          {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
    </div>
  )
}
