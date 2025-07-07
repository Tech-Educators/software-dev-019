//this is the button the user will click to change the theme from light to dark

//!context only works in client components
"use client";

import { useTheme } from "@/context/ThemeContext"; //custom hook

export default function ThemeButton() {
  //destructure the values from our context
  const { theme, setTheme } = useTheme();

  return (
    <>
      <button
        className={theme}
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
      >
        Toggle theme
      </button>
    </>
  );
}
