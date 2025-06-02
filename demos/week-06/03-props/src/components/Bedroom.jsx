import BedsideTable from "./BedsideTable";

// I need to tell my Bedroom component that there are props waiting! This component needs to accept the props by adding them as a parameter
export default function Bedroom(props) {
  //the props parameter is an object containing properties
  // props = {
  // numberBeds: value,
  // wallColour: value
  //}

  return (
    <section>
      <h2>This is the bedroom component</h2>
      <p>{`This bedroom has ${props.numberBeds} beds`}</p>
      <p>{`The colour of the wall is ${props.wallColour}`}</p>
      <BedsideTable />
    </section>
  );
}
