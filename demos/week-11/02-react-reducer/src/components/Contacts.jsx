"use client"; //remember

//Ecmascript file had an error

import { useTheme } from "@/context/ThemeContext";

//we can update the rest of components to use the state stored in reducer now
export default function Contacts() {
  const { state } = useTheme();
  return (
    <>
      <div className={state.theme}>
        <h2>Manny</h2>
        <p>Instructor</p>
      </div>
    </>
  );
}
