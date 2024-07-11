import { useRef, useState } from "react";
import useRegisterApi from "../../hooks/queries/useRegisterApi";
import { isEmptyString } from "./../helper";
import useTimer from "../../hooks/useTimer";

function getDifferenceInSeconds(date1: Date, date2: Date): number {
  const diffInMilliseconds = date2.getTime() - date1.getTime();
  return Math.floor(diffInMilliseconds / 1000);
}

const useLoginForm = () => {
  const {
    checkEmailMutateErrMessage,
    loginMutate,
    isLoginMutatePending,
    isLoginMutateError,
    loginMutateErrMessage,
    isCheckEmailMutateError,
    checkEmailMutate,
    verifyOtpMutate,
    isVerifyOtpError,
    verifyOtpMutateErrMessage,
    isCheckEmailMutatePending,
    isRegenerateOtpPending,
    regenerateOtpMutate,
  } = useRegisterApi();
  const [loginInputValues, setLoginInputValues] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });
  const [otp, setOtp] = useState("");
  const handleOtpChange = (val: string) => {
    setOtp(val);
  };
  const [step, setStep] = useState<"email" | "otp" | "password">("email");
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const { timerDuration, isActive, startTimer, resetTimer } = useTimer();
  const handleInputChange = (e: any, field: any) => {
    setLoginInputValues((prevValues) => ({
      ...prevValues,
      [field]: e.target.value,
    }));
  };
  const handleVerifyOtp = (otp: string) => {
    verifyOtpMutate(
      { otp: otp, email: loginInputValues.email },
      {
        onSuccess: () => (window.location.href = "/"),
      }
    );
    console.log("completed");
  };
  const handleLogin = () => {
    loginMutate(loginInputValues);
  };
  const handleRegenerateOtp = () => {
    regenerateOtpMutate(loginInputValues.email, {
      onSuccess: () => {
        startTimer(120);
        setOtp("");
      },
    });
  };
  const handleCheckEmail = () => {
    if (isEmptyString(loginInputValues.email)) {
      emailInputRef?.current?.focus();
      return;
    }
    checkEmailMutate(loginInputValues.email, {
      onSuccess: (data) => {
        if (data.isGoogleUser) {
          setStep("otp");
          data.otpCreatedAt
            ? startTimer(
                120 -
                  getDifferenceInSeconds(
                    new Date(data.otpCreatedAt),
                    new Date()
                  )
              )
            : startTimer(120);
        } else {
          setStep("password");
        }
      },
    });
  };
  return {
    loginInputValues,
    handleInputChange,
    emailInputRef,
    passwordInputRef,
    handleLogin,
    isLoginMutatePending,
    isLoginMutateError,
    loginMutateErrMessage,
    handleCheckEmail,
    checkEmailMutateErrMessage,
    isCheckEmailMutateError,
    step,
    handleVerifyOtp,
    isVerifyOtpError,
    verifyOtpMutateErrMessage,
    expiryMessage: isActive ? `Expires in ${timerDuration}s` : "OTP Expired",
    isResendDisabled: isActive,
    isCheckEmailMutatePending,
    otp,
    handleOtpChange,
    handleRegenerateOtp,
    isRegenerateOtpPending,
  };
};

export default useLoginForm;
