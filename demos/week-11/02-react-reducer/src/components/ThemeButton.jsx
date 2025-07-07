//we will have a button per theme. Each button will have a dispatch function that triggers the type of theme (action)  the user is selecting

//when dispatch triggers the action, the reducer function will find a match between the type and the case that matches it

//our case will update the value of state to the type of theme that was actioned

//!context only works in client components
"use client";

import { useTheme } from "@/context/ThemeContext"; //custom hook

export default function ThemeButton() {
  //destructure the values from our context, which reducer is managing now
  const { state, dispatch } = useTheme();
  console.log(state); //you can see how state changes in the console
  return (
    <>
      <button
        className={state.theme}
        onClick={() => {
          dispatch({ type: "light" });
        }}
      >
        Toggle light
      </button>
      <button
        className={state.theme}
        onClick={() => {
          dispatch({ type: "dark" });
        }}
      >
        Toggle dark
      </button>
      <button
        className={state.theme}
        onClick={() => {
          dispatch({ type: "colourblind" });
        }}
      >
        Toggle colourblind
      </button>
      <button
        className={state.theme}
        onClick={() => {
          dispatch({ type: "dyslexia" });
        }}
      >
        Toggle dyslexia
      </button>
    </>
  );
}
