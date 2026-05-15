import styles from './Resume.module.css'
import { useState } from 'react'

export default function Resume({
  onClose,
  onMinimize,
  onMaximize,
  openLink,
  openApp,
}) {
  const [activeMenu, setActiveMenu] = useState(null)
  const [isZoomed, setZoomed] = useState(false)

  function toggleMenu(menuName) {
    setActiveMenu((prev) => (prev === menuName ? null : menuName))
  }

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <div className={styles.menubar}>
          <div
            className={`${styles.menuItem} ${styles.file} ${
              activeMenu === 'file' ? styles.activeMenu : ''
            }`}
            onClick={() => toggleMenu('file')}
          >
            File
            {activeMenu === 'file' && (
              <div
                className={styles.menuDropdown}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <ul>
                  <li className={styles.disabled}>Save</li>
                  <li className={styles.disabled}>Print</li>

                  <li className={styles.exit} onClick={onClose}>
                    Exit
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className={`${styles.menuItem} ${styles.edit}`}>Edit</div>

          <div
            className={`${styles.menuItem} ${styles.view} ${
              activeMenu === 'view' ? styles.activeMenu : ''
            }`}
            onClick={() => toggleMenu('view')}
          >
            View
            {activeMenu === 'view' && (
              <div
                className={styles.menuDropdown}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <ul>
                  <li className={styles.maximize} onClick={onMaximize}>
                    Maximize
                  </li>

                  <li className={styles.minimize} onClick={onMinimize}>
                    Minimize
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className={`${styles.menuItem} ${styles.tools}`}>Tools</div>

          <div className={`${styles.menuItem} ${styles.help}`}>Help</div>
        </div>

        <img src="/barlogo.webp" alt="Bar Logo" />
      </div>

      <div className={`${styles.toolbar}`}>
        <div
          className={`${styles.toolbar_item} ${styles.focused} ${!isZoomed ? '' : styles.pressed}`}
          onClick={() => setZoomed((prev) => !prev)}
        >
          <img src="/search.webp"></img>
          <span>Zoom</span>
        </div>

        <div
          className={`${styles.toolbar_item} ${styles.focused}`}
          onClick={() => {
            const link = document.createElement('a')
            link.href = '/resume.docx'
            link.download = 'Faiz_Resume.docx'
            link.click()
          }}
        >
          <img src="/save.webp"></img>
          <span>Save</span>
        </div>

        <div className={styles.verticle}></div>

        <div className={`${styles.toolbar_item} ${styles.disabled}`}>
          <img src="/print.webp"></img>
          <span>Print</span>
        </div>

        <div
          className={`${styles.toolbar_item} ${styles.focused}`}
          onClick={() => {
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
      </div>

      <div className={styles.hero}>
        <div className={styles.img_cont}>
          <img
            src="/temp-resume.png"
            alt="Resume"
            loading="lazy"
            className={`${isZoomed ? styles.ptr_min : styles.ptr_plus}`}
            onClick={() => setZoomed((prev) => !prev)}
          ></img>
        </div>
      </div>
      <div className={styles.footer}>
        <span>Click to zoom, then drag to view other areas.</span>
      </div>
    </div>
  )
}
