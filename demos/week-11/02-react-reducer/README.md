# Set up reducer in your React / Next app

- This demo assumes you have already set up context

## Step 1: Create a reducer function

- In your context component, declare a reducer function
- Build some logic using a conditional statement (if, switch ... case)

## Step 2: Declare your useReducer hook

- Make sure you destructure state and dispatch
- The useReducer function takes two arguments --> the reducer function, and the initial value of state (in this case, an object)

## Step 3: Update context

- Refactor your state provider values to be state and dispatch

## Step 4: Refactor your context whenever you used it

- Use state and dispatch in your components
- In this case, state has a property theme (state.theme)
- dispatch will trigger the state value updates
