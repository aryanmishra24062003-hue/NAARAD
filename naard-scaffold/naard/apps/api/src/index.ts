import express from 'express';
import cors from 'cors';
import { healthRouter } from './routes/health.js';

const app = express();
const PORT = process.env.API_PORT || 4000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/health', healthRouter);

app.listen(PORT, () => {
  console.log(`[naard-api] running on http://localhost:${PORT}`);
});
