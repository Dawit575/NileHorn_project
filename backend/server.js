import express from "express";
import dotenv from "dotenv";
import './config/db.js';

dotenv.config();

const app = express();

const port = process.PORT || 3000;

app.listen(port, () => {
  console.log(`The server is running on http://localhost:${port}`);
});
