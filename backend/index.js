import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./routes/book.route.js";
import router from "./routes/user.route.js";
import cors from "cors";
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 3030;
const mongo = process.env.MONGO_URI;

try {
  mongoose.connect(mongo, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log("Connected to MongoDB");
} catch (error) {
  console.error("Error connecting to MongoDB:", error);
}

app.get("/", (req, res) => {
  res.send("Welcome to the Book Store API");
});
app.use("/book", bookRoute);

app.use("/user", router);
app.use("/login", router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
