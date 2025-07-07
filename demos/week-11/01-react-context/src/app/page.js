//TODO: I want to set up a way to manage different themes for my app
//example: https://www.demie-mistica.com/
//I want my app to be more accessible by having different themes (light, dark, colourblind-friendly, dyslexia-friendly...)
//I will have a set of buttons to toggle the different themes
import Contacts from "@/components/Contacts";
import ThemeButton from "@/components/ThemeButton";

export default function HomePage() {
  return (
    <>
      <h1>This is the home page</h1>
      <ThemeButton />
      <Contacts />
    </>
  );
}
