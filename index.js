import express from 'express';
import mongoose from 'mongoose';
import fileUpload from 'express-fileupload';
import auth from './routes/auth.js';
import library from './routes/library.js';
import edit from './routes/edit.js';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 5000;
const DB_URL = process.env.DB_URL;

const app = express();

app.use(express.json());
app.use(fileUpload());

// app.use(passport.initialize());
// app.use(passport.session());

app.use('/api/Auth', auth);
app.use('/api/library', library);
app.use('/api/settings', edit);

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
