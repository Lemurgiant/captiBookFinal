import React, { useRef, useState } from "react";
import useRegisterApi from "../../hooks/queries/useRegisterApi";
import { isEmptyString } from "./../helper";

const useSignupForm = () => {
  const {
    signupMutate,
    isSignupMutateError,
    isSignupMutatePending,
    signupMutateErrMessage,
    isSignupMutateSuccess,
  } = useRegisterApi();
  const [signUpInputValues, setSignUpInputValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e: any, field: any) => {
    setSignUpInputValues((prevValues) => ({
      ...prevValues,
      [field]: e.target.value,
    }));
  };
  const firstNameInputRef = useRef<HTMLInputElement>(null);
  const lastNameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const handleSignup = () => {
    if (isEmptyString(signUpInputValues.firstName)) {
      firstNameInputRef?.current?.focus();
      return;
    }
    if (isEmptyString(signUpInputValues.lastName)) {
      lastNameInputRef?.current?.focus();
      return;
    }
    if (isEmptyString(signUpInputValues.email)) {
      emailInputRef?.current?.focus();
      return;
    }
    if (isEmptyString(signUpInputValues.password)) {
      passwordInputRef?.current?.focus();
      return;
    }

    signupMutate(signUpInputValues);
  };
  return {
    signUpInputValues,
    handleInputChange,
    handleSignup,
    firstNameInputRef,
    lastNameInputRef,
    emailInputRef,
    passwordInputRef,
    isSignupMutateError,
    isSignupMutatePending,
    signupMutateErrMessage,
    isSignupMutateSuccess,
  };
};

export default useSignupForm;
