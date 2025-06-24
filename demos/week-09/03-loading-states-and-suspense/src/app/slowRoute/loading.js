//this loading page will render in place of the actual page until the page contents are ready to render
//the loading page will only work in the current location (in this case, "/slowRoute")

export default function Loading() {
  return (
    <>
      <h1>I am just a placeholder. Don&apos;t mind me</h1>
      <p>Loading...</p>
      <p>Loading...</p>
      <p>Loading...</p>
    </>
  );
}

//You can customise this page to look more like a a loading state (spinner, loading bar, loading...)
