import Header from "./components/Header";
import Footer from "./components/Footer";
import Section from "./components/Section";
import { data } from "./lib/data";

export default function App() {
  return (
    <>
      <Header />
      {data.map(function (dataItem) {
        return (
          <Section
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
