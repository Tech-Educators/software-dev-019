//as soon as we want to add more themes, state variables start piling up!
//we can use reducer to condense all our state variables into one with different cases
"use client";
import { createContext, useContext } from "react";
import { useReducer } from "react";

//declare our reducer function --> in this function we will declare the different options (values) our state will contain
//the action and state parameters represent objects!
//in action, we are going to have a type property --> the type of action we want to use
//in state, we will have a property for our themes --> this is all our state condensed

//make sure your parameters are in this same order: state, action
//your state needs to be there first, so the action can trigger its type

function themeReducer(state, action) {
  // our logic here is a conditional --> if the theme is light, then activate light theme styles
  //syntax--> you can use if statements || switch ... case
  //we are going to find matches between the type of action and the value in state

  //with the spread operator we are merging the current state object with the new state object we want to have after the state is updated

  //return breaks the case (we don't need the break keyword after each case)

  switch (action.type) {
    case "light":
      return { ...state, theme: (state.theme = "light") };

    case "dark":
      return { ...state, theme: (state.theme = "dark") };

    case "colourblind":
      return { ...state, theme: (state.theme = "colourblind") };

    case "dyslexia":
      return { ...state, theme: (state.theme = "dyslexia") };

    // default:
    //   return { ...state, theme: (state.theme = "light") };
  }
}

const ThemeContext = createContext("light");

export function ThemeProvider({ children }) {
  //declare our reducer hook
  //dispatch is in charge of triggering the different action types
  //state contains the values of state
  //useReducer takes two arguments --> first, the reducer function; second, the initial value of your state (state is an object!)
  const [state, dispatch] = useReducer(themeReducer, { theme: "" });

  return (
    <ThemeContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

//=======================================

//a refactored version of the reducer function
// function themeReducer(state, action) {
//   console.log(action, state);
//   switch (action.type) {
//     case "dark":
//     case "light":
//     case "dyslexia":
//     case "colourblind":
//       return { ...state, theme: (state.theme = action.type) };
//     default:
//       return { ...state, theme: (state.theme = "light") };
//   }
// }
