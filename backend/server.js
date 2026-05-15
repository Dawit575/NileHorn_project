import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

import './config/db.js';
import router  from './routes/authRoutes.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/auth-routes', router);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`The server is running on http://localhost:${port}`);
});
