import mongoose from "mongoose";

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

export async function dbconnect() {
  try {
    mongoose.connection.setMaxListeners(500);
    mongoose.connect(process.env.MONGODB_URL, options);
    const connection = mongoose.connection;
    connection.on("connected", () => {});
    console.error("MongoDB has conneted.");
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
