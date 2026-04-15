import app from "./app.js";
import dotenv from "dotenv";
import connectDatabase from "./db/connectDatabase.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDatabase();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
