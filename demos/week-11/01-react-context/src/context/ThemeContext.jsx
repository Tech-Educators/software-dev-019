//import context tools

import { createContext, useContext } from "react";
import { useState } from "react";

//here you are declaring our context. The initial value in createContext is optional since we are also declaring an initial value in our state hook
const ThemeContext = createContext("light");

//I am not exporting this function by default because I will be export other functions too
export function ThemeProvider({ children }) {
  //declare our state
  const [theme, setTheme] = useState("light");

  return (
    //how are we going to represent every component in here? children represents every child component in our app
    //children is a keyword
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

//we need a custom hook, so we can access the values stored in context using the useContext() hook
//we are making our code efficient by having this custom hook; otherwise, we would have had to import useContext and use it in every single component that needs these context values
export function useTheme() {
  return useContext(ThemeContext);
}
