import Otp from "../models/otpModel.js";
import crypto from "crypto";

export async function generateOtp(email) {
  const otp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate a random 6-digit OTP
  const hashedOtp = crypto.createHash("sha256").update(otp).digest("hex");
  // Check if the user is a Google user and doesn't have a password set

  // Create a new OTP document
  const newOtp = new Otp({
    email: email,
    otp: hashedOtp,
  });
  await newOtp.save();
  return otp;
}
