"use client"; //remember

//Ecmascript file had an error

import { useTheme } from "@/context/ThemeContext";

export default function Contacts() {
  const { theme } = useTheme();
  return (
    <>
      <div className={theme}>
        <h2>Manny</h2>
        <p>Instructor</p>
      </div>
    </>
  );
}
