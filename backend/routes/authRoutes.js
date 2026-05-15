import express from "express";
import { loginAdmin, createAdmin } from '../controller/authController.js';

const router = express.Router();

//createUser
router.post('/create-admin', createAdmin);

//login
router.post("/login-admin",loginAdmin)

export default router;
