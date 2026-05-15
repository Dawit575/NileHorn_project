import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import db from "../config/db";
import { findUserByEmail } from "../model/userModel";

export const loginAdmin = (res,req) => {
  const {user_email,user_password} = req.body;

  findUserByEmail(user_email, async(error,result) => {

    if(error){
      return res.status(500).json({
        message:"Database Error",error
      })
    }

    if(result.length === 0){
      return res.status(400).json({
        message:"Admin not found."
      })
    }

    
  })
}
