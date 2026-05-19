import express from "express";
import {
  getAll,
  getById,
  editPortfolio,
  addPortfolio,
  delete_portfolio,
} from '../controller/portfolioController.js';

  const portfolioRoutes = express.Router();

portfolioRoutes.get("/getAllPortfolio",getAll);
portfolioRoutes.get("/getById/id/:id",getById);
portfolioRoutes.post('/createPortfolio', addPortfolio);
portfolioRoutes.put('/editPortfolio/:id', editPortfolio);
portfolioRoutes.delete('/deletePortfolio/:id', delete_portfolio);

export default portfolioRoutes;
