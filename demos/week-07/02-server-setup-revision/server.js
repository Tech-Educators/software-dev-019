//imports
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
// import { db } from "./utils/dbConnection"; //destructure db variable

//configs
const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();

//port
const PORT = process.env.MY_PORT; //post number stored in .env

app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`);
});

//root route
app.get("/", (req, res) => {
  res.json({ message: "This is the root route. Welcome everyone!" });
});
