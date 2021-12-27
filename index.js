import express from 'express';
import mongoose from 'mongoose';
import router from '../dipl-library/routes/index.js';

import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 5000;
const DB_URL = process.env.DB_URL;

const app = express();
app.use(express.json());

app.use('/api/auth', router);

async function startApp() {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => {
      console.log('SERVER STARTED ON PORT ' + PORT);
    });
  } catch (e) {
    console.log(e);
  }
}
startApp();
