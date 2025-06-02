//App component is the parent component
//usually, all our imports go at the top
import "./App.css";
import Bedroom from "./components/Bedroom";
import LivingRoom from "./components/LivingRoom";
import Kitchen from "./components/Kitchen";
import Garage from "./components/Garage";

export default function App() {
  return (
    <main>
      <h1>App</h1>
      {/* here I am nesting my Bedroom component */}
      <Bedroom />
      <Bedroom />
      <Kitchen />
      <Garage />
      <LivingRoom />
      <img />
    </main>
  );
}
