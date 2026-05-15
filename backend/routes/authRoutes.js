import express from "express";
import { loginAdmin, createAdmin } from '../controller/authController.js';

const router = express.Router();

//createUser
router.post('/api/create-admin', createAdmin);

//login
router.post("/api/login-admin",loginAdmin)

export default router;
