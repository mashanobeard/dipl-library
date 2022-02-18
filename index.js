import express from 'express';
import mongoose from 'mongoose';
import router from '../dipl-library/routes/index.js';
import router1 from '../dipl-library/routes/index1.js';
import router2 from './routes/index2.js';

import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 5000;
const DB_URL = process.env.DB_URL;

const app = express();

app.use(express.json());

// app.use(passport.initialize());
// app.use(passport.session());

app.use('/api/auth', router);
app.use('/api/library', router1);
app.use('/api/settings', router2);

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
