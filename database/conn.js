import mongoose from "mongoose";

export default async function connect() {
  await mongoose.connect(
    "mongodb+srv://Admin:Admin123@quiz.udgevb4.mongodb.net/?retryWrites=true&w=majority"
  );
  console.log("Database connected");
}
