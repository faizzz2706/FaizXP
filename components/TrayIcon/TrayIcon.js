"use client";
import { useState, useRef } from "react";
import styles from "./TrayIcon.module.css";

export default function TrayIcon({ icon, text, onClick }) {
  const [show, setShow] = useState(false);
  const timer = useRef(null);

  const handleEnter = () => {
    timer.current = setTimeout(() => {
      setShow(true);
    }, 400);
  };

  const handleLeave = () => {
    clearTimeout(timer.current);
    setShow(false);
  };

  return (
    <div
      className={styles.wrapper}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button className={styles.button} onClick={onClick}>
        <img src={icon} alt="" />
      </button>

      {show && (
        <div className={styles.tooltip}>
          {text}
        </div>
      )}
    </div>
  );
}