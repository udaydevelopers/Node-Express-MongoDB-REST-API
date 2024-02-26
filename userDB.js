require("dotenv").config();
const connectDB = require("./db/connect");
const User = require("./models/user");

const UserJson = require("./users.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    await User.deleteMany();
    await User.create(UserJson);
    console.log("success user data");
  } catch (error) {
    console.log(error);
  }
};

start();