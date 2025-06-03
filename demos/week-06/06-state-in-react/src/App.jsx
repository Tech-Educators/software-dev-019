import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Section from "./components/Section";

export default function App() {
  // let [count, setCount] = useState(0); --> this state was in teh Button component, but I need it here, so I declared it here to be passed as props to other components

  //if your state is too far down the component tree, you need to declare state at the top of the tree and pass the state variable and mutation function down as props --> bubbling state up

  return (
    <>
      <Header />
      <Section />
      <Section />
      <Footer />
    </>
  );
}
