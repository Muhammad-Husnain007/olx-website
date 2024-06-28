const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URL = process.env.MONGO_URL || 'mongodb+srv://hasnainilyas007:hasnainMongoDB@cluster0.jrdcmxr.mongodb.net/';

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Mongo Connection Successful");
  } catch (error) {
    console.error("Mongo Connection Failed:");
  }
};

module.exports = connectDB;
