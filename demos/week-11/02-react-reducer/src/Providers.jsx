//here we can compile all our context providers for convenience
//we will use this component function in our layout

//context is only available in the client!
"use client";

import { ThemeProvider } from "./context/ThemeContext";

export function Providers({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
