import db from "../config/db.js";

// get All portfolio
export const getAllPortfolio = (callback) => {
  const sql = `SELECT * FROM portfolio;`;
  db.query(sql,callback);
}

//get portfolio by ID
export const getPortfolioById = (id,callback) => {
  const sql = `SELECT * FROM portfolio WHERE id=?;`;
  db.query(sql,[id],callback);
}

//create Portfolio
export const createPortfolio = (data,callback) => {
  const sql = `INSERT INTO portfolio (title,description,image,github_link,live_link)
                VALUES(?, ?, ?, ?, ?);`;
                db.query(sql, [
                  data.title,
                  data.description,
                  data.image,
                  data.github_link,
                  data.live_link,
                ],callback);
}

//update portfolio
export const updatePortfolio = (id,data,callback) => {
  const sql = `UPDATE portfolio SET title=?, description=?, image=?, github_link=?, live_link=?
              WHERE id=?;`;
              db.query(sql,[
              data.title,
              data.description,
              data.image,
              data.github_link,
              data.live_link,
              id
              ],callback);
}

// delete portfolio
export const deletePortfolio  = (id,callback) => {
  const sql = `DELETE FROM portfolio WHERE id=?;`;
            db.query(sql,[id],callback);
}
