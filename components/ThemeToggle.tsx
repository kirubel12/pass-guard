"use client";

import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-lg border border-border bg-card hover:bg-muted transition-colors"
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5 text-foreground">
        <IconSun
          className={`absolute inset-0 transition-all duration-300 ${
            theme === "light"
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 rotate-90 scale-0"
          }`}
          stroke={1.5}
        />
        <IconMoon
          className={`absolute inset-0 transition-all duration-300 ${
            theme === "dark"
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 -rotate-90 scale-0"
          }`}
          stroke={1.5}
        />
      </div>
    </button>
  );
}
