import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD
});

db.connect((error) => {
  if(error){
    console.log("Database is not connected.",error)
  }
  else{
    console.log("Database is connected successfully.")
  }
})

export default db;
