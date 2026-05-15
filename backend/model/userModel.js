import db from "../config/db.js";


export const createUser = (user_name, user_email, hashedPassword, callback) => {
  const sql = `INSERT INTO users (user_name,user_email,user_password)
  VALUES(?, ?, ?);`;
  db.query(sql, [user_name, user_email, hashedPassword], callback);
};

export const findUserByEmail = (user_email,callback) => {
  const sql = `SELECT * FROM users WHERE user_email=?;`;
  db.query(sql,[user_email],callback);
}
