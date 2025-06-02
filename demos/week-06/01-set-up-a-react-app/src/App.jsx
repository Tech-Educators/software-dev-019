import "./App.css";

//each component is fundamentally a function
//when we want to export an element exclusively in a file, we can use the keyword default

export default function App() {
  //our JS code goes here
  //in the return, we will add the code to render elements on the page written in HTML
  return (
    <main>
      <h1>Welcome to my App</h1>
      <h2>Enjoy the view!</h2>
      <img src="#" alt="Lovely content image" />
    </main>
  );
}
