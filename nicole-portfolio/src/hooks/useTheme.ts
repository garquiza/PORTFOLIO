import { useEffect, useState } from "react";

export type Theme = "dark" | "light";

const STORAGE_KEY = "theme";

const readTheme = (): Theme =>
  document.documentElement.dataset.theme === "light" ? "light" : "dark";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(readTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {}
  }, [theme]);

  const toggle = () =>
    setTheme((current) => (current === "dark" ? "light" : "dark"));

  return { theme, toggle };
}
