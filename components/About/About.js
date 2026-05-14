import styles from './About.module.css'
import { useState } from 'react'

export default function About({ onClose, onMinimize, onMaximize, openLink }) {
  const [activeMenu, setActiveMenu] = useState(null)

  const [dropdown, setDropdown] = useState({
    menu1: false,
    menu2: false,
    menu3: false,
  })

  const toggleDropdown = (menu) => {
    setDropdown((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }))
  }

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
          <img src="/back.webp"></img>
          <span>Back</span>
        </div>

        <div className={`${styles.toolbar_item} ${styles.disabled}`}>
          <img src="/forward.webp"></img>
          <span>Forward</span>
        </div>

        <div className={styles.verticle}></div>

        <div className={styles.toolbar_item}>
          <img src="/projects.webp"></img>
          <span>My Projects</span>
        </div>

        <div className={styles.toolbar_item}>
          <img src="/resume.webp"></img>
          <span>My Resume</span>
        </div>

        <div className={styles.verticle}></div>

        <div className={`${styles.toolbar_item} ${styles.disabled}`}>
          <img src="/up.webp"></img>
        </div>
      </div>

      <div className={styles.address_row}>
        <div className={styles.addressItem}>
          <span>Address</span>
        </div>

        <div className={styles.addressBar}>
          <div className={styles.fillbar}>
            <img src="/about.webp"></img>
            <span>About Me</span>
          </div>
        </div>

        <div className={styles.go}>
          <img src="/go.webp" style={{ width: '20px', height: '20px' }}></img>

          <span>Go</span>
        </div>
      </div>

      <div className={styles.hero}>
        <aside className={styles.left_panel}>
          <div className={styles.menu1} onClick={() => toggleDropdown('menu1')}>
            <span>Social Links</span>
            <img src="/pulldown-alt.webp"></img>
          </div>
          {dropdown.menu1 && (
            <div className={styles.menu_list}>
              <li
                onClick={() => {
                  openLink({
                    icon: '/linkedin.webp',
                    appName: 'LinkedIn',
                    url: 'https://www.linkedin.com/in/faiz-ali-134610250',
                  })
                }}
              >
                <img src="/linkedin.webp"></img>
                <p>LinkedIn</p>
              </li>
              <li
                onClick={() => {
                  openLink({
                    icon: '/github.webp',
                    appName: 'Github',
                    url: 'https://www.github.com/faizzz2706/',
                  })
                }}
              >
                <img src="/github.webp"></img>
                <p>Github</p>
              </li>
              <li
                onClick={() => {
                  openLink({
                    icon: '/instagram.webp',
                    appName: 'Instagram',
                    url: 'https://www.instagram.com/faizzz706',
                  })
                }}
              >
                <img src="/instagram.webp"></img>
                <p>Instagram</p>
              </li>
            </div>
          )}

          <div className={styles.menu2} onClick={() => toggleDropdown('menu2')}>
            <span>Skills</span>
            <img src={dropdown.menu2 ? '/pullup.webp' : '/pulldown.webp'}></img>
          </div>
          {dropdown.menu2 && <div className={styles.menu_list}>
            
            <li><img src="/frontend.png"></img><p>Frontend Development</p></li>
            <li><img src="/backend.png"></img><p>Backend Development</p></li>
            <li><img src="/api.png"></img><p>REST API Development</p></li>
            <li><img src="/auth.png"></img><p>Authentication and Authorization</p></li>
            <li><img src="/database.png"></img><p>Database Management</p></li>
            <li><img src="/dsa.png"></img><p>Data Structure and Algorithms</p></li>
            <li><img src="/ml.png"></img><p>Machine Learning</p></li>
            <li><img src="/skill7.webp"></img><p>Problem Solving</p></li>
            </div>}

          <div className={styles.menu3} onClick={() => toggleDropdown('menu3')}>
            <span>Software/Tools</span>
            <img src={dropdown.menu3 ? '/pullup.webp' : '/pulldown.webp'}></img>
          </div>
          {dropdown.menu3 && <div className={styles.menu_list}>
            
            <li><img src="/vs.png"></img><p>VS Code</p></li>
            <li><img src="/react.png"></img><p>React.js</p></li>
            <li><img src="/node.png"></img><p>Node.js</p></li>
            <li><img src="/express.png"></img><p>Express.js</p></li>
            <li><img src="/prisma.png"></img><p>Prisma ORM</p></li>
            <li><img src="/git.png"></img><p>Git/Github</p></li>
            <li><img src="/py.png"></img><p>Python</p></li>
            <li><img src="/claude.png"></img><p>Claude</p></li>
            <li><img src="/cursor.png"></img><p>Cursor</p></li>
            
            
            </div>}
        </aside>
        <div className={styles.separate}></div>
        <div className={styles.right_panel}>
          <div className={styles.about_content}>
            <div className={styles.content_inner}>
              <h1>About Me</h1>

              <div className={styles.about_block}>
                <img src="/about1.png" />

                <p>
                  I’m Faiz, a developer and designer based in India, currently
                  focused on building modern web applications and immersive
                  digital experiences. My journey into tech started with
                  curiosity around design and evolved into a deep interest in
                  full-stack development, UI/UX, and interactive systems. Over
                  time, I’ve expanded from frontend design into backend
                  development, learning how to build complete products from the
                  ground up. I’m especially drawn to projects that combine clean
                  aesthetics with strong functionality, and I prefer investing
                  deeply into what I create rather than rushing through the
                  process.
                </p>
              </div>

              <div className={styles.about_block}>
                <img src="/about2.png" />

                <p>
                  Growing up in India, my interest in technology and design
                  developed through the internet, games, and the way digital
                  products could completely shape how people interact and
                  communicate. I became fascinated by interfaces, animations,
                  and systems that felt immersive and intuitive rather than just
                  functional. Over time, that curiosity turned into a deeper
                  interest in full-stack development and product design. What
                  draws me most is the ability to create experiences that people
                  genuinely connect with not just visually, but emotionally
                  through smooth interactions and thoughtful details. That
                  mindset still influences every project I build today.
                </p>
              </div>

              <div className={styles.about_block}>
                <img src="/about3.png" />

                <p>
                  I've always been as interested in how things are built as how
                  they look. That pulled me deeper into web development over
                  time, where I found I could bring the same design thinking to
                  interactive experiences. It felt like a natural extension of
                  the work I was already doing. Most of what I build now is in
                  that space, pushing what's possible in the browser and
                  treating the web as its own medium rather than somewhere to
                  park content.
                </p>
              </div>

              <div className={styles.about_block}>
                <img src="/about4.png" />

                <p>
                  Technology and development taught me more than just how to
                  build applications. They taught me patience, consistency, and
                  the importance of solving problems with intention instead of
                  rushing toward quick results. Spending hours learning,
                  debugging, and rebuilding things from scratch shaped the way I
                  approach my work today. I tend to be deeply detail-oriented,
                  often investing more time into refining interactions,
                  structure, and user experience than what’s immediately visible
                  on the surface. Whether it’s a personal idea or a serious
                  project, I prefer creating fewer things with real depth and
                  quality rather than pushing out work that feels unfinished or
                  careless.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <p>Learn more about Faiz Ali</p>
      </div>
    </div>
  )
}
