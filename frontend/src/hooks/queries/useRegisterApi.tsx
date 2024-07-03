import { useState } from "react";
import { loginAxios, signupAxios } from "../../features/services";
import { useMutation } from "@tanstack/react-query";

const useRegisterApi = () => {
  const [loginMutateErrMessage, setLoginMutateErrMessage] = useState("");
  const {
    mutate: loginMutate,
    isPending: isLoginMutatePending,
    isSuccess: isLoginMutateSuccess,
    isError: isLoginMutateError,
  } = useMutation({
    mutationKey: ["loginMutate"],
    mutationFn: loginAxios,
    onSuccess: () => {
      window.location.href = "/";
    },
    onError: (error: any) => {
      setLoginMutateErrMessage(error.response.data.message);
    },
  });

  const [signupMutateErrMessage, setSignupMutateErrMessage] = useState("");
  const {
    mutate: signupMutate,
    isPending: isSignupMutatePending,
    isSuccess: isSignupMutateSuccess,
    isError: isSignupMutateError,
  } = useMutation({
    mutationKey: ["signupMutate"],
    mutationFn: signupAxios,
    onError: (error: any) => {
      setSignupMutateErrMessage(error.response.data.message);
    },
  });
  return {
    loginMutate,
    isLoginMutateSuccess,
    isLoginMutatePending,
    isLoginMutateError,
    loginMutateErrMessage,
    signupMutate,
    isSignupMutateSuccess,
    isSignupMutatePending,
    isSignupMutateError,
    signupMutateErrMessage,
  };
};

export default useRegisterApi;
