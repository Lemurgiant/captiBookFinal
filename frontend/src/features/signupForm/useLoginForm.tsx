import React, { useRef, useState } from "react";
import useRegisterApi from "../../hooks/queries/useRegisterApi";
import { isEmptyString } from "./../helper";

const useLoginForm = () => {
  const {
    loginMutate,
    isLoginMutatePending,
    isLoginMutateError,
    loginMutateErrMessage,
  } = useRegisterApi();
  const [loginInputValues, setLoginInputValues] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: any, field: any) => {
    setLoginInputValues((prevValues) => ({
      ...prevValues,
      [field]: e.target.value,
    }));
  };
  const handleLogin = () => {
    if (isEmptyString(loginInputValues.email)) {
      emailInputRef?.current?.focus();
      return;
    } else if (isEmptyString(loginInputValues.password)) {
      passwordInputRef?.current?.focus();
      return;
    }
    loginMutate(loginInputValues);
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
  };
};

export default useLoginForm;
