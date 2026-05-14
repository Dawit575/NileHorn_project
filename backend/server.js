const express = require("express");
const app = express();
const db = require("./config/db");

const port = process.PORT || 3000;



app.listen(port, () => {
  console.log(`The server is running on http://localhost:${port}`);
});
