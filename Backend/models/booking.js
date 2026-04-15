import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
      minlength: 2,
      maxlength: 100,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
      match: [/^\+?[0-9\s-]{7,15}$/, "Please enter a valid phone number"],
    },
    deviceModel: {
      type: String,
      required: [true, "Device model is required"],
      trim: true,
      minlength: 2,
      maxlength: 120,
    },
    issueType: {
      type: String,
      required: [true, "Issue type is required"],
      enum: [
        "Display Replacement",
        "Charging Issue",
        "Battery Replacement",
        "Speaker / Mic Repair",
        "Touch & Display Repair",
        "Water Damage",
        "Other",
      ],
    },
    message: {
      type: String,
      trim: true,
      maxlength: 1000,
      default: "",
    },
    status: {
      type: String,
      enum: ["new", "in_progress", "completed", "cancelled"],
      default: "new",
    },
  },
  {
    timestamps: true,
  },
);

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;
