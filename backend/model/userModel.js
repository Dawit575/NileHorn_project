import db from "../config/db";

export const findUserByEmail = (email,callback) => {
  const sql = `SELECT * FROM users WHERE user_email=?;`;
  db.query(sql,[email],callback);
}
