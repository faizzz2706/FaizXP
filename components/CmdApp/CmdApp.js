'use client'
import styles from './CmdApp.module.css'
import { useState, useEffect, useRef } from 'react'

export default function CmdApp({ onClose }) {
  const [input, setInput] = useState('')

  const inputRef = useRef(null);
  useEffect(() => {
  inputRef.current?.focus();
}, []);

  const initial =
    "FaizXP v1.0 (March 2026)\nInspired by Windows XP\n\nType 'help' for a list of commands.\nPress ENTER/RETURN to execute commands."

  const [history, setHistory] = useState([{ cmd: initial }])

  const runcommand = (cmd) => {
    let output = ''

    if (cmd === 'help') {
      output =
        'Info: AUTHOR, STACK, DISCLAIMER\nCommands: DATE, TIME, VER, HELP, EXIT'
    } else if (cmd === 'author') {
      output = 'Designed and developed by Faiz Ali'
    } else if (cmd === 'stack') {
      output =
        'HTML\nCSS\nNext.js\n\nKey Dependencies:\nxp.css\ngithub.com/1j01/jspaint'
    } else if (cmd === 'disclaimer') {
      output =
        'This site is a personal portfolio project. All logos, artwork, and assets referenced remain the property of their respective owners. They are included here as inspiration, homage, or parody, not as original creations or with any claim of ownership. This project is independent and has no affiliation with or endorsement from the original creators.'
    } else if (cmd === 'date') {
      output = new Date().toLocaleDateString()
    } else if (cmd === 'time') {
      output = new Date().toLocaleTimeString()
    } else if (cmd === 'ver') {
      output = 'FaizXP v1.0 (March 2026)'
    } else if (cmd === 'exit') {
      onClose()
      return;
    } else if (cmd === 'clear') {
      setHistory([])
      return
    } else {
      output = 'Command Error'
    }
    setHistory((prev) => [...prev, { cmd, output }])
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      runcommand(input.trim().toLowerCase())
      setInput('')
      inputRef.current.focus()
    }
  }

  return (
    <div className={styles.main}>
      {history &&
        history.map((item, i) => (
          <div key={i}>
            <div>C:\faiz\&gt; {item.cmd}</div>
            <div>{item.output}</div>
          </div>
        ))}

      <div>
        C:\faiz\&gt;
        <input
          className={styles.input_box}
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          style={{
            background: 'black',
            color: 'white',
            border: 'none',
            outline: 'none',
            fontSize: '17px',
            fontWeight: '600',
          }}
        />
      </div>
    </div>
  )
}
