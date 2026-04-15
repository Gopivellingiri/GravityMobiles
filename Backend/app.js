import express from "express";
import cors from "cors";
import bookingRoutes from "./routes/bookingRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";

const app = express();

const allowedOrigins = new Set([
  "https://gravitymobiles.in",
  "https://www.gravitymobiles.in",
  "http://localhost:5173",
]);

const corsOptions = {
  origin(origin, callback) {
    // Allow non-browser clients like curl/Postman.
    if (!origin) return callback(null, true);

    if (allowedOrigins.has(origin)) {
      return callback(null, true);
    }

    try {
      const url = new URL(origin);
      const isLocalHost =
        url.hostname === "localhost" || url.hostname === "127.0.0.1";

      if (
        isLocalHost &&
        (url.protocol === "http:" || url.protocol === "https:")
      ) {
        return callback(null, true);
      }
    } catch {
      // Invalid origin format, fall through to block.
    }

    return callback(new Error("Not allowed by CORS"));
  },
  methods: ["GET", "POST", "OPTIONS"],
};

// Middleware
app.use(express.json());

app.use(cors(corsOptions));

// Routes
app.use("/api/bookings", bookingRoutes);
app.use("/api/contact", contactRoutes);

export default app;
