const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const URL = process.env.MONGO_URI;

const connectDb = async () => {
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log('Mongodb connected now');
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDb;
