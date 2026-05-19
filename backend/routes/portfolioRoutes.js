import express from "express";
import {
  getAll,
  getById,
  editPortfolio,
  addPortfolio,
  delete_portfolio,
} from '../controller/portfolioController.js';

import { verifyAdmmin } from '../middleware/authMiddleware.js';

  const portfolioRoutes = express.Router();

portfolioRoutes.get('/getAllPortfolio', getAll);
portfolioRoutes.get('/getById/:id', getById);
portfolioRoutes.post('/createPortfolio', verifyAdmmin, addPortfolio);
portfolioRoutes.put('/editPortfolio/:id', verifyAdmmin, editPortfolio);
portfolioRoutes.delete('/deletePortfolio/:id', verifyAdmmin, delete_portfolio);

export default portfolioRoutes;
