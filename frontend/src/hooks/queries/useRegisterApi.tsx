import { useState } from "react";
import {
  checkEmailAxios,
  loginAxios,
  regenerateOtpAxios,
  signupAxios,
  verifyOtpAxios,
} from "../../features/services";
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
  const [checkEmailMutateErrMessage, setCheckEmailMutateErrMessage] = useState(
    ""
  );
  const {
    mutate: checkEmailMutate,
    isPending: isCheckEmailMutatePending,
    isSuccess: isCheckEmailMutateSuccess,
    isError: isCheckEmailMutateError,
  } = useMutation({
    mutationKey: ["checkEmailAxios"],
    mutationFn: checkEmailAxios,
    onError: (error: any) => {
      setCheckEmailMutateErrMessage(error.response.data.message);
    },
  });

  const [verifyOtpMutateErrMessage, setVerifyOtpMutateErrMessage] = useState(
    ""
  );
  const {
    mutate: verifyOtpMutate,
    isPending: isVerifyOtpPending,
    isSuccess: isVerifyOtpSuccess,
    isError: isVerifyOtpError,
  } = useMutation({
    mutationKey: ["verifyOtpAxios"],
    mutationFn: verifyOtpAxios,
    onError: (error: any) => {
      setVerifyOtpMutateErrMessage(error.response.data.message);
    },
  });

  const {
    mutate: regenerateOtpMutate,
    isPending: isRegenerateOtpPending,
    isSuccess: isRegenerateOtpSuccess,
    isError: isRegenerateOtpError,
  } = useMutation({
    mutationKey: ["regenerateOtpAxios"],
    mutationFn: regenerateOtpAxios,
    onError: (error: any) => {
      setVerifyOtpMutateErrMessage(error.response.data.message);
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
    checkEmailMutate,
    isCheckEmailMutatePending,
    isCheckEmailMutateSuccess,
    isCheckEmailMutateError,
    checkEmailMutateErrMessage,
    verifyOtpMutate,
    isVerifyOtpPending,
    isVerifyOtpSuccess,
    isVerifyOtpError,
    verifyOtpMutateErrMessage,
    regenerateOtpMutate,
    isRegenerateOtpPending,
    isRegenerateOtpSuccess,
    isRegenerateOtpError,
  };
};

export default useRegisterApi;
