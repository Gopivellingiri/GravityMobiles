import mongoose from "mongoose";

const connectDatabase = async () => {
  try {
    const data = await mongoose.connect(process.env.DB_URL, {
      bufferCommands: false,
      autoIndex: true,
    });

    console.log(`MongoDB connected with server: ${data.connection.host}`);
  } catch (error) {
    console.error(`MongoDB connection failed: ${error.message}`);

    // Exit process with failure
    process.exit(1);
  }
};

export default connectDatabase;
