/** Matches `components/Taskbar/Taskbar.module.css` `.taskbar` height */
export const TASKBAR_HEIGHT_PX = 30;

export function clampWindowToViewport(top, left, width, height) {
  if (typeof window === "undefined") {
    return { top, left };
  }
  const maxTop = Math.max(0, window.innerHeight - TASKBAR_HEIGHT_PX - height);
  const maxLeft = Math.max(0, window.innerWidth - width);
  return {
    top: Math.min(Math.max(0, top), maxTop),
    left: Math.min(Math.max(0, left), maxLeft),
  };
}
