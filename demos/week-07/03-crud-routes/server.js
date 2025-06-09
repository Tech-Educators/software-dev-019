//imports
import express from "express";
import cors from "cors";
import { db } from "./utils/dbConnection.js";

//configs
const app = express();
app.use(express.json());
app.use(cors());

//port
const PORT = process.env.MY_PORT; //post number stored in .env

app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`);
});

//root route
app.get("/", (req, res) => {
  res.json({ message: "This is the root route. Welcome everyone!" });
});

//=============================================

//TODO: I want to READ data from the database

app.get("/biscuits", async (req, res) => {
  //query db
  try {
    const data = await db.query(`SELECT * FROM biscuits`);
    res.json(data.rows);
  } catch (error) {
    console.log(
      "Error, error, error, something broke! Check your connection string"
    );
    res.status(500).json({ success: false });
  }
});
//===================================
//error handling
//try ... catch
//try --> the code you want to run
//catch --> the error it gives when the code breaks
//====================================

//TODO: I want to CREATE new data in the database

app.post("/addBiscuit", (req, res) => {
  // const body = req.body; // in the body object, we are storing the new values to add to the table
  const { biscuit_name, src, description, crunchiness } = req.body; //destructured version of the body

  try {
    const insert = db.query(
      `INSERT INTO biscuits (biscuit_name, src, description, crunchiness) VALUES ($1, $2, $3, $4)`,
      [biscuit_name, src, description, crunchiness]
    ); // if you are NOT destructuring the body object, use dot notation (body.biscuit_name ...)
    res.status(200).json({ success: true }); // this is to have a confirmation that the body was sent to the db correctly
  } catch (error) {
    console.log(
      "Error, error, error, something broke! Check your connection string"
    );
    res.status(500).json({ success: false });
  }
});

//TODO: I want to DELETE data from the table
app.delete("/deleteBiscuit/:id", (req, res) => {
  //we will use params to set what id we want to target for deletion
  //in the endpoint, we can set up dynamic params using : (for example, /:id)
  const biscuitId = req.params.id;

  try {
    const deleteBiscuit = db.query(`DELETE FROM biscuits WHERE id = $1`, [
      biscuitId,
    ]);

    // if (!biscuitId) {
    //   console.log("ID not there");
    // }

    res.status(200).json({ success: true });
  } catch (error) {
    console.log(
      "Error, error, error, something broke! Check your connection string"
    );
    res.status(500).json({ success: false });
  }
});

//TODO: I want to UPDATE data in the table
//Update is a mix of delete and post --> we will use the body to add the updated data, and the params to target the correct entry

app.put("/updateBiscuit/:id", (req, res) => {
  // /:id --> dynamic params are params that change in value
  const biscuitBody = req.body; //updated biscuit data
  const biscuitId = req.params.id; //target the correct biscuit

  try {
    const updateBiscuit = db.query(
      `UPDATE biscuits SET biscuit_name = $1, src = $2, description = $3, crunchiness = $4 WHERE id = $5`,
      [
        biscuitBody.biscuit_name,
        biscuitBody.src,
        biscuitBody.description,
        biscuitBody.crunchiness,
        biscuitId,
      ]
    );
    res.status(200).json({ success: true });
  } catch (error) {
    console.log(
      "Error, error, error, something broke! Check your connection string"
    );
    res.status(500).json({ success: false });
  }
});
