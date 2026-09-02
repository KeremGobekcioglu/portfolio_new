"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // localStorage unavailable — theme just won't persist
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="shrink-0 rounded-full border border-line dark:border-line-dark bg-bg dark:bg-bg-dark px-3 py-1 text-sm text-muted dark:text-muted-dark hover:text-accent dark:hover:text-accent-dark hover:border-accent/40 dark:hover:border-accent-dark/40 transition-colors duration-150"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      {isDark ? "Light" : "Dark"}
    </button>
  );
}
