import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as LocalStrategy } from "passport-local";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import { isValidEmail } from "../utils/helpers/helpers.js";
import dotenv from "dotenv";

dotenv.config();

passport.use(
  new LocalStrategy(
    { usernameField: "email" },
    async (email, password, done) => {
      try {
        if (!isValidEmail(email)) {
          return done(null, false, { message: "Invalid email" });
        }
        const user = await User.findOne({ email });
        if (!user) {
          return done(null, false, { message: "Invalid email or password" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return done(null, false, { message: "Wrong password" });
        }
        console.log("localstrategy accepted");
        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);
//ff
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      const newUser = {
        googleId: profile.id,
        displayName: profile.displayName,
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
        image: profile.photos[0].value,
        email: profile.emails[0].value,
      };

      try {
        let user = await User.findOne({ googleId: profile.id });

        if (user) {
          // User already exists, proceed with login
          return done(null, user);
        } else {
          // Check if email already exists for a different user
          user = await User.findOne({ email: profile.emails[0].value });

          if (user) {
            // Email exists for another user, handle accordingly (merge accounts or prompt user)
            console.log("Email already exists:", profile.emails[0].value);
            return done(null, false, { message: "Email already registered" });
          } else {
            // Create a new user
            console.log("Creating new user");
            user = await User.create(newUser);
            return done(null, user);
          }
        }
      } catch (err) {
        console.error("Error during Google OAuth:", err);
        return done(err, false);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  console.log(user.id, " serialized");
  done(null, user.id);
});
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

export default passport;
