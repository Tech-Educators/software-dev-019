import Header from "./components/Header";
import Footer from "./components/Footer";
import Section from "./components/Section";

import { data } from "./lib/data";

export default function App() {
  return (
    <>
      <Header />

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
