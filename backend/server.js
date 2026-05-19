import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

import './config/db.js';
import router  from './routes/authRoutes.js';
import portfolioRoutes from './routes/portfolioRoutes.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/auth-routes', router);
app.use('/api/portfolio-routes',portfolioRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`The server is running on http://localhost:${port}`);
});
