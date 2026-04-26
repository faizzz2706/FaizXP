import styles from './Contact.module.css'
import { useState } from 'react'

export default function Contact({onClose, onMinimize, onMaximize, openLink}) {
  const [activeMenu, setActiveMenu] = useState(null)

  function toggleMenu(menuName) {
    setActiveMenu((prev) => (prev === menuName ? null : menuName))
  }

  const [email, setEmail] = useState({
    from: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setEmail((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSend = () => {
    const { subject, message } = email

    if (!subject || !message) {
      alert('Fill all the required fields')
      return
    }

    const mailto = `mailto:sfaiz.ali.rizvi@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message)}`

    window.location.href = mailto
  }

  const handleClear = () => {
    setEmail({
      from: '',
      subject: '',
      message: '',
    })
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className={styles.main}>
      {/* ===== HEADER ===== */}
      <div className={styles.header}>
        <div className={styles.menubar}>
          
          {/* FILE */}
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
                  <li className={styles.disabled}>New Message</li>
                  <li className={styles.disabled}>Send Message</li>
                  <li className={styles.disabled}>Print</li>
                  <li className={styles.exit} onClick={onClose}>Exit</li>
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
                  <li className={styles.maximize} onClick={onMaximize}>Maximize</li>
                  <li className={styles.minimize} onClick={onMinimize}>Minimize</li>
                </ul>
              </div>
            )}
          </div>

          <div className={`${styles.menuItem} ${styles.tools}`}>Tools</div>
          <div className={`${styles.menuItem} ${styles.help}`}>Help</div>
        </div>

        <img src="/barlogo.webp" alt="Bar Logo" />
      </div>

      <div className={styles.toolbar_row}>
        <div
          className={`${styles.toolbarItem} ${styles.send_message}`}
          onClick={handleSend}
        >
          <img src="/send.webp" />
          <span>Send Message</span>
        </div>

        <div
          className={`${styles.toolbarItem} ${styles.new_message}`}
          onClick={handleClear}
        >
          <img src="/new.webp" />
          <span>New Message</span>
        </div>

        <div className={styles.toolbarItem}>
          <img src="/cut.webp" />
        </div>

        <div className={styles.toolbarItem}>
          <img src="/copy.webp" />
        </div>

        <div className={styles.toolbarItem}>
          <img src="/paste.webp" />
        </div>

        <div className={`${styles.toolbarItem} ${styles.linkedin}`} onClick={() => {
                    openLink({
                      icon: '/linkedin.webp',
                      appName: 'LinkedIn',
                      url: 'https://www.linkedin.com/in/faiz-ali-134610250',
                    })
                  }}>
          <img src="/linkedin.webp" />
          <span>LinkedIn</span>
        </div>
      </div>

      <div className={styles.content}>
        
        <div>
          <label>To:</label>
          <input
            value="Faiz Ali <sfaiz.ali.rizvi@gmail.com>"
            readOnly
            style={{ backgroundColor: '#8d8d8d1e' }}
          />
        </div>

        <div>
          <label>From:</label>
          <input
            name="from"
            value={email.from}
            placeholder="Enter email"
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Subject:</label>
          <input
            name="subject"
            value={email.subject}
            placeholder="Write Subject"
            onChange={handleChange}
          />
        </div>

        <div>
          <textarea
            name="message"
            value={email.message}
            style={{ width: '94%', height: '100px' }}
            placeholder="Write your message here"
            onKeyDown={handleKeyDown}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className={styles.footer}></div>
    </div>
  )
}