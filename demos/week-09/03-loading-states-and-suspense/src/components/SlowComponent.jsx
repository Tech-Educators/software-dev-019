//this component will be artificially slow for dem purposes
async function delay(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

export default async function SlowComponent() {
  //I am delaying the rendering of this component by 5 seconds
  await delay(5000);

  return (
    <>
      <h1 className="text-amber-600">I am very slow on purpose</h1>
      <h2 className="text-amber-600">Do not make your apps slow on purpose!</h2>
    </>
  );
}
