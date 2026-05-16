import styles from './Projects.module.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import {
  faInstagram,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
export default function Projects({ onClose, onMinimize, onMaximize }) {
  const [activeMenu, setActiveMenu] = useState(null)
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
                  <li className={styles.disabled}>Print</li>
                  <li className={styles.disabled}>Print setup</li>

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

      <div className={styles.toolbar}>
        <div className={`${styles.toolbar_item} ${styles.disabled}`}>
          <img src="/home.webp"></img>
          <span>Home</span>
        </div>

        <div className={styles.verticle}></div>

        <div className={styles.toolbar_item}>
          <img src="/back.webp"></img>
          <span>Back</span>
        </div>

        <div className={styles.toolbar_item}>
          <img src="/forward.webp"></img>
          <span>Forward</span>
        </div>
        <div className={styles.toolbar_item}>
          <img src="/favorites.webp"></img>
          <span>Favorites</span>
        </div>
        <div className={styles.verticle}></div>

        <div className={`${styles.toolbar_item} ${styles.disabled}`}>
          <img src="/views.webp"></img>
          <span>Light/Dark</span>
        </div>
      </div>

      <div className={styles.address_row}>
        <div className={styles.addressItem}>
          <span>Address</span>
        </div>

        <div className={styles.addressBar}>
          <div className={styles.fillbar}>
            <img src="/projects.webp"></img>
            <span>https://myprojects.com</span>
          </div>
        </div>

        <div className={styles.go}>
          <img src="/go.webp" style={{ width: '20px', height: '20px' }}></img>

          <span>Go</span>
        </div>
      </div>
      <div className={styles.hero}>
        <div className={styles.hero_header}>
          <div className={styles.logo}>
            <img src="l_projects.webp"></img>
          </div>
          <div className={styles.search}>
            <input placeholder="Search"></input>
            <div>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
          </div>
          <div className={styles.links}>
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faGithub} />
          </div>
        </div>

        
      </div>
    </div>
  )
}
