import FormWrapper from "./FormWrapper";
import PrimaryTextField from "../../components/PrimaryTextFieldUI";
import useLoginForm from "./useLoginForm";
import { Stack, Typography } from "@mui/material";
import GoogleButton from "./GoogleButton";
import ErrorTypography from "./ErrorTypography";
import FormButton from "./FormButton";
import OTPField from "./OTPField";
import { useTheme } from "styled-components";

const LoginForm = () => {
  const {
    loginInputValues,
    handleInputChange,
    emailInputRef,
    passwordInputRef,
    isLoginMutateError,
    isLoginMutatePending,
    loginMutateErrMessage,
    checkEmailMutateErrMessage,
    isCheckEmailMutateError,
    handleLogin,
    handleCheckEmail,
    handleVerifyOtp,
    isVerifyOtpError,
    verifyOtpMutateErrMessage,
    expiryMessage,
    isResendDisabled,
    isCheckEmailMutatePending,
    step,
    handleOtpChange,
    handleRegenerateOtp,
    isRegenerateOtpPending,
    otp,
  } = useLoginForm();

  const theme = useTheme();

  return (
    <FormWrapper height={step === "password" ? "22rem" : "28rem"}>
      LOGIN
      {step === "email" ? (
        <>
          <ErrorTypography style={{ marginTop: "0.7rem" }}>
            {isCheckEmailMutateError && checkEmailMutateErrMessage}
          </ErrorTypography>
          <Stack gap="0.3rem" width={"90%"} mt="1rem" mb="4rem">
            <PrimaryTextField
              inputRef={emailInputRef}
              placeholder="Email"
              sx={{ userSelect: "none" }}
              size="small"
              value={loginInputValues.email}
              onChange={(e) => handleInputChange(e, "email")}
            />
            <FormButton
              isPending={isCheckEmailMutatePending}
              label="NEXT"
              onClick={handleCheckEmail}
            />
            <Typography variant="inherit" fontSize={"14px"} fontWeight={400}>
              Don't have an account? <a href="/signup">Sign up</a>
            </Typography>
          </Stack>
          <GoogleButton label="Login with Google" />
        </>
      ) : step === "otp" ? (
        <>
          <ErrorTypography style={{ marginTop: "0.7rem" }}>
            {isVerifyOtpError && verifyOtpMutateErrMessage}
          </ErrorTypography>
          <Stack gap="2rem" width={"90%"} mt="1rem" mb="4rem">
            <Typography
              variant="inherit"
              fontSize={"14px"}
              fontWeight={400}
              textAlign={"center"}
            >
              We sent an OTP to {loginInputValues.email}
            </Typography>
            <Stack gap="0.8rem" mb="1rem">
              <OTPField
                otpStr={otp}
                length={6}
                onChange={handleOtpChange}
                onComplete={handleVerifyOtp}
              />
              <Typography
                variant="inherit"
                fontSize={"14px"}
                fontWeight={400}
                textAlign={"center"}
              >
                {expiryMessage}
              </Typography>
            </Stack>
            <FormButton
              isPending={isRegenerateOtpPending}
              label="RESEND OTP"
              onClick={isResendDisabled ? undefined : handleRegenerateOtp}
              bgcolor={theme.blant}
              bgcolorActive={theme.blant}
              isDisabled={isResendDisabled}
            />
          </Stack>
        </>
      ) : (
        step === "password" && (
          <>
            <ErrorTypography style={{ marginTop: "0.7rem" }}>
              {isLoginMutateError && loginMutateErrMessage}
            </ErrorTypography>
            <Stack gap="1rem" width={"90%"} mt="1rem" mb="4rem">
              <Typography
                variant="inherit"
                fontSize={"14px"}
                fontWeight={400}
                textAlign={"center"}
              >
                Enter your password:
              </Typography>
              <PrimaryTextField
                inputRef={passwordInputRef}
                placeholder="Password"
                type="password"
                size="small"
                value={loginInputValues.password}
                onChange={(e) => handleInputChange(e, "password")}
              />

              <FormButton
                isPending={isLoginMutatePending}
                label="LOGIN"
                onClick={handleLogin}
              />
            </Stack>
          </>
        )
      )}
    </FormWrapper>
  );
};

export default LoginForm;
