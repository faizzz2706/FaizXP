/** Matches `components/Taskbar/Taskbar.module.css` `.taskbar` height */
export const TASKBAR_HEIGHT_PX = 30;

/** Matches `components/Windows/Windows.module.css` `.header` height */
export const WINDOW_HEADER_HEIGHT_PX = 30;

export function clampWindowToViewport(top, left, width, height) {
  if (typeof window === "undefined") {
    return { top, left };
  }
  // Allow the window body to sit behind the taskbar; only the title bar must stay above it.
  const maxTop = Math.max(
    0,
    window.innerHeight - TASKBAR_HEIGHT_PX - WINDOW_HEADER_HEIGHT_PX
  );
  const maxLeft = Math.max(0, window.innerWidth - width);
  return {
    top: Math.min(Math.max(0, top), maxTop),
    left: Math.min(Math.max(0, left), maxLeft),
  };
}
