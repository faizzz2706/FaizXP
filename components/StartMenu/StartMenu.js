'use client'
import styles from './StartMenu.module.css'
import { useState, useRef } from 'react'
export default function StartMenu({
  handleLogoff,
  handleShutdown,
  openLink,
  openApp,
  closeStart,
}) {
  const [open, setOpen] = useState(false)
  const timeoutRef = useRef(null)

  const handleEnter = () => {
    clearTimeout(timeoutRef.current)
    setOpen(true)
  }

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false)
    }, 200)
  }
  return (
    <div className={styles.main}>
      <div className={styles.top}>
        <img src="/profile.jpeg" alt="Profile"></img>
        <span>Faiz Ali</span>
      </div>
      <div className={styles.middle}>
        <div className={styles.middle_left}>
          <ul style={{ padding: '0px', margin: '0px' }}>
            <li>
              <img src="/projects.webp" alt="projrcts"></img>
              <div className={styles.icon_content}>
                <span className={styles.heading}>My Projects</span>
                <span className={styles.subheading}>View my work</span>
              </div>
            </li>
            <li className={styles.divider}>
              <img src="/contact.webp" alt="projrcts"></img>
              <div
                className={styles.icon_content}
                onClick={() => {
                  closeStart()
                  openApp({
                    type: 'contact-me',
                    title: 'Contact Me',
                    icon: '/contact.webp',
                  })
                }}
              >
                <span className={styles.heading}>Contact Me</span>
                <span className={styles.subheading}>Send me a message</span>
              </div>
            </li>
            <li>
              <img src="/about.webp" alt="projrcts"></img>
              <div className={styles.icon_content}>
                <span className={styles.heading2}>About Me</span>
              </div>
            </li>
            <li>
              <img src="/mediaPlayer.webp" alt="projrcts"></img>
              <div className={styles.icon_content}>
                <span className={styles.heading2}>Media Player</span>
              </div>
            </li>
            <li>
              <img src="/music.webp" alt="projrcts"></img>
              <div className={styles.icon_content}>
                <span className={styles.heading2}>Music Player</span>
              </div>
            </li>

            <li
              onClick={() => {
                closeStart()
                openApp({
                  type: 'paint',
                  title: 'Paint',
                  icon: '/paint.webp',
                })
              }}
            >
              <img src="/paint.webp" alt="projrcts"></img>
              <div className={styles.icon_content}>
                <span className={styles.heading2}>Paint</span>
              </div>
            </li>

            <li className={styles.divider}>
              <img src="/doodledev.webp" alt="projrcts"></img>
              <div className={styles.icon_content}>
                <span className={styles.heading2}>DoodleDev</span>
              </div>
            </li>
          </ul>
          <div
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            style={{ position: 'relative' }}
          >
            <span
              style={{
                justifyContent: 'center',
                fontWeight: '400',
                display: 'flex',
                alignItems: 'center',
                fontSize: '16px',
                height: '35px',
              }}
            >
              All Programs
              <img
                src="/arrow.webp"
                style={{ width: '15px', height: '15px', marginLeft: '8px' }}
              />
            </span>

            {open && (
              <div className={styles.All_programs}>
                <div className={styles.program_li}>
                  <img src="/about.webp"></img>
                  <span>About Me</span>
                </div>
                <div className={styles.program_li}>
                  <img src="/projects.webp"></img>
                  <span>My Projects</span>
                </div>
                <div className={styles.program_li}>
                  <img src="/resume.webp"></img>
                  <span>My Resume</span>
                </div>
                <div
                  className={styles.program_li}
                  onClick={() => {
                    closeStart()
                    openApp({
                      type: 'contact-me',
                      title: 'Contact Me',
                      icon: '/contact.webp',
                    })
                  }}
                >
                  <img src="/contact.webp"></img>
                  <span>Contact Me</span>
                </div>
                <div className={styles.program_li}>
                  <img src="/mediaPlayer.webp"></img>
                  <span>Media Player</span>
                </div>
                <div className={styles.program_li}>
                  <img src="/music.webp"></img>
                  <span>Music Player</span>
                </div>
                <div className={styles.program_li}>
                  <img src="/photos.webp"></img>
                  <span>Image Viewer</span>
                </div>
                <div
                  className={styles.program_li}
                  onClick={() => {
                    closeStart()
                    openApp({
                      type: 'paint',
                      title: 'Paint',
                      icon: '/paint.webp',
                    })
                  }}
                >
                  <img src="/paint.webp"></img>
                  <span>Paint</span>
                </div>
                <div
                  className={styles.program_li}
                  onClick={() => {
                    closeStart()
                    openApp({
                      type: 'cmd',
                      title: 'cmd',
                      icon: '/cmd.webp',
                    })
                  }}
                >
                  <img src="/cmd.webp"></img>
                  <span>Command Prompt</span>
                </div>
                <div
                  className={styles.program_li}
                  onClick={() => {
                    closeStart()
                    openLink({
                      icon: '/instagram.webp',
                      appName: 'Instagram',
                      url: 'https://www.instagram.com/faizzz706',
                    })
                  }}
                >
                  <img src="/instagram.webp"></img>
                  <span>Instagram</span>
                </div>
                <div
                  className={styles.program_li}
                  onClick={() => {
                    closeStart
                    openLink({
                      icon: '/github.webp',
                      appName: 'Github',
                      url: 'https://www.github.com/faizzz2706',
                    })
                  }}
                >
                  <img src="/github.webp"></img>
                  <span>Github</span>
                </div>
                <div
                  className={styles.program_li}
                  onClick={() => {
                    closeStart
                    openLink({
                      icon: '/linkedin.webp',
                      appName: 'LinkedIn',
                      url: 'https://www.linkedin.com/in/faiz-ali-134610250',
                    })
                  }}
                >
                  <img src="/linkedin.webp"></img>
                  <span>LinkedIn</span>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className={styles.middle_right}>
          <div
            className={styles.middle_right_li}
            onClick={() => {
              closeStart()
              openLink({
                icon: '/instagram.webp',
                appName: 'Instagram',
                url: 'https://www.instagram.com/faizzz706',
              })
            }}
          >
            <img src="/instagram.webp"></img>
            <span>Instagram</span>
          </div>
          <div
            className={styles.middle_right_li}
            onClick={() => {
              closeStart()
              openLink({
                icon: '/github.webp',
                appName: 'Github',
                url: 'https://www.github.com/faizzz2706',
              })
            }}
          >
            <img src="/github.webp"></img>
            <span>Github</span>
          </div>
          <div
            className={styles.middle_right_li}
            onClick={() => {
              closeStart()
              openLink({
                icon: '/linkedin.webp',
                appName: 'LinkedIn',
                url: 'https://www.linkedin.com/in/faiz-ali-134610250',
              })
            }}
          >
            <img src="/linkedin.webp"></img>
            <span>Linkedin</span>
          </div>
          <div className={styles.recently_used}>
            <img src="/recently-used.webp"></img>
            <span>Recently Used</span>
            <span style={{ marginLeft: '10px', fontSize: '9px' }}>►</span>
          </div>

          <div
            className={styles.middle_right_li}
            onClick={() => {
              closeStart()
              openApp({
                type: 'cmd',
                title: 'cmd',
                icon: '/cmd.webp',
              })
            }}
          >
            <img src="/cmd.webp"></img>
            <span>Command Prompt</span>
          </div>

          <div className={styles.middle_right_li}>
            <img src="/photos.webp"></img>
            <span>Image Viewer</span>
          </div>

          <div className={styles.middle_right_li}>
            <img src="/resume.webp"></img>
            <span>My Resume</span>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.footer_buttons}>
          <div className={styles.logoff} role="button" onClick={handleLogoff}>
            <img src="/logoff.webp" style={{ marginRight: '3px' }}></img>
            <span>Logg Off</span>
          </div>
          <div
            className={styles.shutdown}
            role="button"
            onClick={handleShutdown}
          >
            <img src="/shutdown.webp" style={{ marginRight: '3px' }}></img>
            <span>Shut Down</span>
          </div>
        </div>
      </div>
    </div>
  )
}
