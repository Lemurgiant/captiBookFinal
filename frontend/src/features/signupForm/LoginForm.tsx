import React, { useEffect, useRef } from "react";
import FormWrapper from "./FormWrapper";
import PrimaryTextField from "../../components/PrimaryTextFieldUI";
import useLoginForm from "./useLoginForm";
import { Stack, Typography } from "@mui/material";
import PrimaryButtonUI from "../../components/PrimaryButtonUI";
import GoogleButton from "./GoogleButton";
import ErrorTypography from "./ErrorTypography";
import useRegisterApi from "../../hooks/queries/useRegisterApi";
import PrimarySpinner from "../../components/PrimarySpinner";
import { useTheme } from "styled-components";
import FormButton from "./FormButton";

const LoginForm = () => {
  const {
    loginInputValues,
    handleInputChange,
    emailInputRef,
    passwordInputRef,
    isLoginMutateError,
    isLoginMutatePending,
    loginMutateErrMessage,
    handleLogin,
  } = useLoginForm();
  const theme = useTheme();

  return (
    <FormWrapper height="28rem">
      LOGIN
      <ErrorTypography style={{ marginTop: "1rem" }}>
        {isLoginMutateError && loginMutateErrMessage}
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
        <PrimaryTextField
          inputRef={passwordInputRef}
          placeholder="Password"
          sx={{ userSelect: "none" }}
          size="small"
          value={loginInputValues.password}
          onChange={(e) => handleInputChange(e, "password")}
        />{" "}
        <FormButton
          isPending={isLoginMutatePending}
          label="LOGIN"
          onClick={handleLogin}
        />
        <Typography variant="inherit" fontSize={"14px"} fontWeight={400}>
          Don't have an account? <a href="/signup">Sign up</a>
        </Typography>
      </Stack>
      <GoogleButton label="Login with Google" />
    </FormWrapper>
  );
};

export default LoginForm;
