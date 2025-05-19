import express from "express";

const app = express();

app.use(express.json());

app.listen(8080, function () {
  console.log("Server is running in port 8080");
});

app.get("/", function (request, response) {
  response.json({ message: "Welcome to the server. This is the root route!" });
});
