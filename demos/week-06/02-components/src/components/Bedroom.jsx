import BedsideTable from "./BedsideTable";

export default function Bedroom() {
  let beds = 2;
  return (
    <section>
      <h2>This is the bedroom component</h2>
      <p>{`This bedroom has ${beds} beds`}</p>
      <BedsideTable />
    </section>
  );
}
