import Header from "./components/Header";
import Footer from "./components/Footer";
import Section from "./components/Section";
// we need to destructure the objects from the data array in data.js as .map wont be able to iterate over the objects otherwise.
import { data } from "./lib/data";

export default function App() {
  return (
    <>
      <Header />
      //we select the data objects from our data.js file and use the .map method
      on them //each object is going to be referrd to as a dataItem while .map
      works on each of them
      {data.map(function (dataItem) {
        //we need to return the elements we are creating otherwise they're not going to be available outside of this function to be rendered!
        return (
          <Section
            //we use famiuliar dot notation to set up our props
            key={dataItem.id}
            title={dataItem.title}
            content={dataItem.content}
          />
        );
      })}
      <Footer />
    </>
  );
}
