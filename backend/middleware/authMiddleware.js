import jwt from "jsonwebtoken";
import dotenv from  "dotenv";
dotenv.config();

export const verifyAdmmin = (req,res,next) => {
  const authHeader = req.headers.authorization;

  const token = authHeader.split(" ")[1];

  if(!token){
    return req.status(401).json({
      message:"Token is not provided."
    })
  }

  try {
    const verified = jwt.verify(token,process.env.DB_SECRET);
    
    req.user = verified;
    next();
  } catch (error) {
    return res.status(401).json({
      message:"Invalid Token.",error
    })
  }
}
