import { Stack, Typography } from "@mui/material";
import PrimaryTextField from "../../components/PrimaryTextFieldUI";
import GoogleButton from "./GoogleButton";
import useSignupForm from "./useSignupForm";
import SignupFormWrapper from "./FormWrapper";
import FormButton from "./FormButton";
import ErrorTypography from "./ErrorTypography";
import { CheckMarkIconUI } from "../../components/Icons";

const SignupForm = () => {
  const {
    signUpInputValues,
    handleInputChange,
    handleSignup,
    firstNameInputRef,
    lastNameInputRef,
    emailInputRef,
    passwordInputRef,
    isSignupMutatePending,
    signupMutateErrMessage,
    isSignupMutateError,
    isSignupMutateSuccess,
  } = useSignupForm();
  return (
    <SignupFormWrapper height={isSignupMutateSuccess ? "22rem" : "33rem"}>
      SIGN UP
      {isSignupMutateSuccess ? (
        <Stack alignItems={"center"} mt="4rem" mb="2rem">
          <CheckMarkIconUI size={70} />
          USER REGISTERED
          <Typography fontSize={"14px"} fontWeight={400} mt="4rem">
            go to <a href="/login">Login Page</a>
          </Typography>
        </Stack>
      ) : (
        <>
          <ErrorTypography style={{ marginTop: "1rem" }}>
            {isSignupMutateError && signupMutateErrMessage}
          </ErrorTypography>
          <Stack gap="0.3rem" width={"90%"} mt="1rem" mb="4rem">
            <PrimaryTextField
              inputRef={firstNameInputRef}
              placeholder="First Name"
              sx={{ userSelect: "none" }}
              size="small"
              value={signUpInputValues.firstName}
              onChange={(e) => handleInputChange(e, "firstName")}
            />
            <PrimaryTextField
              inputRef={lastNameInputRef}
              placeholder="Last Name"
              sx={{ userSelect: "none" }}
              size="small"
              value={signUpInputValues.lastName}
              onChange={(e) => handleInputChange(e, "lastName")}
            />
            <PrimaryTextField
              inputRef={emailInputRef}
              placeholder="Email"
              sx={{ userSelect: "none" }}
              size="small"
              value={signUpInputValues.email}
              onChange={(e) => handleInputChange(e, "email")}
            />
            <PrimaryTextField
              inputRef={passwordInputRef}
              placeholder="Password"
              sx={{ userSelect: "none" }}
              size="small"
              value={signUpInputValues.password}
              onChange={(e) => handleInputChange(e, "password")}
            />
            <FormButton
              isPending={isSignupMutatePending}
              label="SIGN IN"
              onClick={handleSignup}
            />
            <Typography variant="inherit" fontSize={"14px"} fontWeight={400}>
              Already have an account? <a href="/login">Login</a>
            </Typography>
          </Stack>
          <GoogleButton label="Sign in with Google" />
        </>
      )}
    </SignupFormWrapper>
  );
};

export default SignupForm;
