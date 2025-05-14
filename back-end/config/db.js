import "dotenv/config";
import mongoose from "mongoose";

const { MONGO_URL } = process.env;

export const connectDb = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Deu certo a conexão");
  } catch (error) {
    console.log("nao deu certo a conexão", error);
  }
};
