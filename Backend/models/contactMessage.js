import mongoose from "mongoose";

const contactMessageSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
      minlength: 2,
      maxlength: 100,
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
      trim: true,
      minlength: 1,
      maxlength: 100,
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
      match: [/^\+?[0-9\s-]{7,15}$/, "Please enter a valid phone number"],
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true,
      minlength: 3,
      maxlength: 1200,
    },
    status: {
      type: String,
      enum: ["new", "read", "closed"],
      default: "new",
    },
  },
  {
    timestamps: true,
  },
);

const ContactMessage = mongoose.model("ContactMessage", contactMessageSchema);

export default ContactMessage;
