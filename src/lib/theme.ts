import { useSyncExternalStore } from "react";

type Theme = "light" | "dark";

const listeners = new Set<() => void>();
let current: Theme = getInitial();

function getInitial(): Theme {
  if (typeof document === "undefined") return "light";
  return (document.documentElement.getAttribute("data-theme") as Theme) || "light";
}

function setTheme(t: Theme) {
  current = t;
  document.documentElement.setAttribute("data-theme", t);
  try {
    localStorage.setItem("laprrk-theme", t);
  } catch {
    /* private mode */
  }
  listeners.forEach((l) => l());
}

export function useTheme(): [Theme, () => void] {
  const theme = useSyncExternalStore(
    (cb) => {
      listeners.add(cb);
      return () => listeners.delete(cb);
    },
    () => current
  );
  const toggle = () => setTheme(theme === "light" ? "dark" : "light");
  return [theme, toggle];
}
