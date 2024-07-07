import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./db/connectDB.js";
import router from "./router/routes.js";
import cors from "cors";
import passport from "./auth/auth.js";
import session from "express-session";
import User from "./models/userModel.js";
import nodemailer from "nodemailer";

const CLIENT_URL = "https://captibookfinal-2.onrender.com";
const LOCAL_URL = "http://localhost:5173";

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json({ limit: "15mb" }));
app.use(cookieParser());
app.use(express.urlencoded({ limit: "15mb", extended: true }));
app.set("trust proxy", 1);

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: true,
      httpOnly: false,
      sameSite: "none",
    },
  })
);

// Passport initialization
app.use(passport.initialize());
app.use(passport.session());

// CORS setup
const corsOptions = {
  origin: process.env.NODE_ENV === "production" ? CLIENT_URL : LOCAL_URL, // Frontend URL
  credentials: true, // Allow cookies to be sent
};
app.use(cors(corsOptions));

// Routes
app.use("/api", router);

// Google OAuth routes
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

app.get("/auth/google/callback", (req, res, next) => {
  passport.authenticate("google", (err, user, info) => {
    if (err) {
      console.error("Error during Google OAuth:", err);
      const redirectUrl =
        process.env.NODE_ENV === "production"
          ? `${CLIENT_URL}/error`
          : `${LOCAL_URL}/error`;
      return res.redirect(redirectUrl); // Redirect to an error page based on environment
    }
    if (!user) {
      console.error("Authentication failed:", info.message);
      const redirectUrl =
        process.env.NODE_ENV === "production"
          ? `${CLIENT_URL}/login`
          : `${LOCAL_URL}/login`;
      return res.redirect(redirectUrl); // Redirect to login page based on environment
    }
    req.logIn(user, (err) => {
      if (err) {
        console.error("Error during login:", err);
        const redirectUrl =
          process.env.NODE_ENV === "production"
            ? `${CLIENT_URL}/error`
            : `${LOCAL_URL}/error`;
        return res.redirect(redirectUrl); // Redirect to an error page based on environment
      }
      // Successful authentication
      const redirectUrl =
        process.env.NODE_ENV === "production"
          ? `${CLIENT_URL}/dashboard`
          : `${LOCAL_URL}/dashboard`;
      return res.redirect(redirectUrl); // Redirect to dashboard or profile page based on environment
    });
  })(req, res, next);
});

// Protected route
app.get("/protected", (req, res) => {
  if (req.isAuthenticated()) {
    console.log("User is authenticated");
    const userInfo = { ...req.user }; // Create a copy of req.user
    delete userInfo._doc._id; // Delete _id
    delete userInfo._doc.googleId; // Delete googleId

    res.status(200).json({
      isLoggedIn: true,
      userInfo: userInfo._doc,
    });
  } else {
    console.log("User is not authenticated");
    res.status(200).json({
      isLoggedIn: false,
      userInfo: null,
    });
  }
});

app.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }

    req.session.destroy((err) => {
      if (err) {
        return next(err);
      }

      res.clearCookie("connect.sid", {
        path: "/",
        httpOnly: true,
        secure: true,
        sameSite: "none",
      });

      res.status(200).json({ message: "Logout successful" });
    });
  });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
