import dotenv from 'dotenv';
dotenv.config();


import express, { Application } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoutes from './routes/authRoutes';



const app: Application = express();

// middleware
app.use(express.json());
app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true
}));


app.use('/api/auth', authRoutes);

// for testing --------------------------------------
app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'Server is running' });
});

// DB connection ------------------------------
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};



const PORT = process.env.PORT;

const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();

export default app;