"use client";
import styles from "./Windows.module.css";
import { useRef } from "react";

export default function Windows({
  title,
  icon,
  width,
  height,
  top,
  left,
  zIndex,
  isMinimized,
  onClose,
  onFocus,
  onMinimize,
  onMaximize,
  disableMaximize,
  onUpdate,
  children
}) {

  const dragging = useRef(false);
  const resizing = useRef(false);
  const direction = useRef(null);

  const startX = useRef(0);
  const startY = useRef(0);

  const startTop = useRef(0);
  const startLeft = useRef(0);

  const startWidth = useRef(0);
  const startHeight = useRef(0);

  if (isMinimized) return null;

  // -------- DRAG --------
  const startDrag = (e) => {
    dragging.current = true;

    startX.current = e.clientX;
    startY.current = e.clientY;

    startTop.current = top;
    startLeft.current = left;

    document.addEventListener("mousemove", onDrag);
    document.addEventListener("mouseup", stopDrag);
  };

  const onDrag = (e) => {
    if (!dragging.current) return;

    const dx = e.clientX - startX.current;
    const dy = e.clientY - startY.current;

    onUpdate({
      top: startTop.current + dy,
      left: startLeft.current + dx
    });
  };

  const stopDrag = () => {
    dragging.current = false;
    document.removeEventListener("mousemove", onDrag);
    document.removeEventListener("mouseup", stopDrag);
  };

  // -------- RESIZE --------
  const startResize = (e, dir) => {
    e.stopPropagation();

    resizing.current = true;
    direction.current = dir;

    startX.current = e.clientX;
    startY.current = e.clientY;

    startWidth.current = width;
    startHeight.current = height;

    startTop.current = top;
    startLeft.current = left;

    document.addEventListener("mousemove", onResize);
    document.addEventListener("mouseup", stopResize);
  };

  const onResize = (e) => {
    if (!resizing.current) return;

    const dx = e.clientX - startX.current;
    const dy = e.clientY - startY.current;

    let newWidth = width;
    let newHeight = height;
    let newTop = top;
    let newLeft = left;

    if (direction.current.includes("right")) {
      newWidth = Math.max(300, startWidth.current + dx);
    }

    if (direction.current.includes("bottom")) {
      newHeight = Math.max(200, startHeight.current + dy);
    }

    if (direction.current.includes("left")) {
      newWidth = Math.max(300, startWidth.current - dx);
      newLeft = startLeft.current + dx;
    }

    if (direction.current.includes("top")) {
      newHeight = Math.max(200, startHeight.current - dy);
      newTop = startTop.current + dy;
    }

    onUpdate({
      width: newWidth,
      height: newHeight,
      top: newTop,
      left: newLeft
    });
  };

  const stopResize = () => {
    resizing.current = false;
    document.removeEventListener("mousemove", onResize);
    document.removeEventListener("mouseup", stopResize);
  };

  return (
    <div
      className={styles.window}
      style={{ width, height, top, left, zIndex }}
      onMouseDown={onFocus}
    >

      {/* HEADER */}
      <div className={styles.header} onMouseDown={startDrag}>
        <div className={styles.title_box}>
          <img src={icon} />
          <span>{title}</span>
        </div>

        <div className={styles.control_buttons}>
          <button onClick={onMinimize} className={styles.minimize}></button>
          <button onClick={onMaximize} disabled = {disableMaximize} className={styles.maximize}></button>
          <button onClick={onClose} className={styles.close}></button>
        </div>
      </div>

      {/* CONTENT */}
      <div className={styles.content}>
        {children}
      </div>

      {/* RESIZERS */}
      <div className={styles.resizer_right} onMouseDown={(e)=>startResize(e,"right")} />
      <div className={styles.resizer_left} onMouseDown={(e)=>startResize(e,"left")} />
      <div className={styles.resizer_bottom} onMouseDown={(e)=>startResize(e,"bottom")} />
      <div className={styles.resizer_top} onMouseDown={(e)=>startResize(e,"top")} />

      <div className={styles.resizer_br} onMouseDown={(e)=>startResize(e,"bottom-right")} />
      <div className={styles.resizer_bl} onMouseDown={(e)=>startResize(e,"bottom-left")} />
      <div className={styles.resizer_tr} onMouseDown={(e)=>startResize(e,"top-right")} />
      <div className={styles.resizer_tl} onMouseDown={(e)=>startResize(e,"top-left")} />

    </div>
  );
}