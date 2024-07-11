import mongoose from "mongoose";
import crypto from "crypto";

const otpSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    index: { expires: "2m" },
  },
});

otpSchema.pre("save", function (next) {
  if (!this.isModified("hashedOtp")) {
    return next();
  }

  try {
    const hashedOtp = crypto
      .createHash("sha256")
      .update(this.hashedOtp)
      .digest("hex");
    this.hashedOtp = hashedOtp;
    next();
  } catch (error) {
    next(error);
  }
});

const Otp = mongoose.model("Otp", otpSchema);

export default Otp;
