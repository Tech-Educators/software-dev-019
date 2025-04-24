# React: JSX & Pitfalls

## Overview

***JSX*** (Javascript Xml) is a syntax extension to Javascript that allows us to write Javascript with HTML-like syntax. 

🤔 Syntax extension?? - This is, well, an extension to the syntax of javascript. Think of the following code 

`const sayHey = function(name) {return 'Hey' + name}`

We can write the same thing in more modern syntax: 

`const sayHey = name => 'Hey!' + name`

Both are valid syntax! But if I was feeling bored of Javascript as it was, I might decide I want yet another way of writing a function - lets call it smilexml

`const sayHey = :^)name:^) >:^{'Hey'+ name}`

(I'm sure that won't be annoying to write)

Skipping over a few implementation details, I would have written something called a syntax extension! With this hypothetical syntax extension, you and I could now amuse ourselves by writing our javascript functions with smiley faces. 

But we may have gotten carried away - browsers won't know about or support my decision to make functions more annoying to write - so we need to take a step in the 'build process' to turn it back into normal, plain, boring, non-smiley based javascript. 

JSX is really just a funny way of calling a bunch of functions that **looks** like html. Vite (specifically, esbuild which comes with Vite) turns this JSX:

```jsx
function MyComponent() {
  return <div>Hello, world!</div>;
}
```

into this plain JavaScript:

```jsx
function MyComponent() {
  return React.createElement("div", null, "Hello, world!");
}
```

This transformation allows browsers to execute the code, as they understand React.createElement but not the JSX syntax. 

🤔 You may be wondering what the `null` is doing in the arguments of createElement - more on that later.

So really, JSX is just a convenient way for us to write a bunch of .createElement() calls by returning HTML from a function. 

## Class Plan

- Demo: Live coding, building a hierarchical component tree with React.
- Workshop: Explore JSX syntax by creating a user profile using JSX format.

## Topics

- What is JSX?
- How does JSX syntax differ from HTML?

## Resources

- [React: JSX](https://react.dev/learn/writing-markup-with-jsx)

## Workshop

### What is JSX?

JavaScript eXtension, or JSX, is a syntax extension to JavaScript that allows us to write HTML-like code in our JavaScript files. It's not HTML, but it looks a lot like it.

JSX is like that smiley-faced syntax—it's a nice way to write function calls that looks like HTML to us. 

## Why JSX?

```jsx
function MyComponent() {
  return (
    <div>
      <img src='/image1.png'>
      <p>I'ts an image of an image - how abstract!</p>
      <button onClick={() => {
        console.log('Something')
      }}
      >Click me to log something!</button>
    </div>
  )
}
```

Before the browser can understand this, tools like Vite (specifically, esbuild which comes with Vite) transform it into plain JavaScript:

```javascript
Copy code
function MyComponent() {
  return React.createElement(
    "div",
    null,
    React.createElement("img", { src: '/image1.png' }),
    React.createElement("p", null, "It's an image of an image - how abstract!"),
    React.createElement(
      "button",
      { onClick: () => { console.log('Something') } },
      "Click me to log something!"
    )
  );
}
```

So we totally *could* write the second example ourselves, and that would work just fine, but as you can see that can quickly get much more difficult for us to understand and read than JSX is. 

So lets recap: JSX *looks* like HTML, but it's really just a bunch of function calls -> and, powerfully, we can write expressions in it by using curly braces. 


💭 An expression is any bit of code that resolves to a value. - [Click here to read more](https://www.joshwcomeau.com/javascript/statements-vs-expressions/)


Here's a demo: 

```jsx

export function App() {
  return (
    <div className='App'>
      <p>
      {2 + 2}
      </p>
    </div>
  )
}

```

This would display 4 on the screen!

## Annoying things to remember

- Components should be named with UpperCase letters.
- When you return the JSX, do it inside ()'s (that's how we return across multiple lines).
- Can't use statements inside JSX, only expressions. (meaning no if statements)
- Remember to export the function to use it in other functions!
- Notice that we gave it a class by doing `className` instead of `class`
- That's because `class` is a reserved word in javascript, the same way `let` is a reserved word - so we have to use something else.
- have to return one parent element 

We can't do this for example! You'll see a bunch of red (errors) on the screen. 

```js
export function Ticker() {
  return (
    <h2>This is a ticker</h2>
    <marquee>Whoopie!!</marquee>
  )
}
``` 

So make sure you return one parent element: 

```js
export function Ticker() {
  return (
    <div>
      <h2>This is a ticker</h2>
      <marquee>Whoopie!!</marquee>
    </div>
  )
}
``` 

And that's it! JSX can feel a little weird to start with, but the more you write, the more comfortable you'll be with it!

