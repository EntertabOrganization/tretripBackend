const mongoose = require('mongoose');

const connectDB = async () => {
  const mongoUri = process.env.MONGO_URI;
  const dbName = process.env.MONGO_DB_NAME || 'TretripDB';

  if (!mongoUri) {
    throw new Error('Missing MONGO_URI in environment variables.');
  }

  try {
    await mongoose.connect(mongoUri, {
      dbName,
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 45000,
      retryWrites: true,
      maxPoolSize: 10,
      family: 4,
    });
    console.log(`MongoDB connected successfully to database "${dbName}"`);
  } catch (error) {
    if (error.message.includes('IP that isn\'t whitelisted')) {
      console.error('MongoDB connection error: Atlas blocked this machine\'s IP address. Add your current public IP in Atlas Network Access or temporarily allow 0.0.0.0/0 for testing.');
    } else {
      console.error('MongoDB connection error:', error.message);
    }

    throw error;
  }
};

module.exports = connectDB;
