# Set up context in your React / Next app

## Step 1: Set up a context component

- In a context folder in src, create a context component
- We declared createContext()
- We declared a ThemeProvider function
- Inside ThemeProvider, we declared the theme state
- We returned our ThemeContext.Provider and gave it the state values
- We created a custom hook to activate our useContext hook

## Step 2 (optional): Set up a Providers component

- Declare a Providers function
- Nest any context components in there (for example, ThemeContext)

## Step 3: Provide our context to our whole app

- Use Providers to nest the <body> in your layout

## Step 4: Use context in the components that need it

- Import useTheme and use the theme state wherever you need it
