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
      {/* props are the attributes for our components */}
      {/* the props names are up to you! Make them semantic */}
      <Bedroom numberBeds={2} wallColour={"blue"} />
      <Bedroom numberBeds={1} wallColour={"green"} />
      <Kitchen />
      <Garage />
      <LivingRoom />
      <img
        src="https://i.guim.co.uk/img/media/9f1b249e73a0227f6ee0c9991f2dd72d13457e4d/0_128_2816_1690/master/2816.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=e927d7f65e482bbfa244c0916150c3d2"
        alt="a garden in full bloom"
        width="200"
        height={300}
      />
      <img
        src="https://acacia-gardens.co.uk/wp-content/uploads/2021/07/garden-design-hampstead-london.jpg"
        alt="a garden with grass and sitting area"
        width={300}
        height={150}
      />
    </main>
  );
}
