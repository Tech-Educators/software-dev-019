//this is the root route

// In Express
// app.get("/", (req, res) => {
//   res.json({ message: "this is the root route! Welcome!" });
// });

//this is a route to READ data
export function GET() {
  return new Response("This is the root route. Welcome!");
}
