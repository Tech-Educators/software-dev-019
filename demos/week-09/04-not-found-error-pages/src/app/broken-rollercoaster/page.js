// this is a broken page artificially made on purpose for this demo
export default function BrokenRollercoasterPage() {
  throw new Error(
    "Something broke. Not sure what??? Please, don't leave the website 😭"
  );
  return (
    <>
      <h1>Unfortunately, you will never see this content</h1>
    </>
  );
}
