import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import {
  updateUserDisplayNameAxios,
  updateUserImageAxios,
  updateUserThemeAxios,
} from "../../features/services";

const useUserInfoMutate = () => {
  const queryClient = useQueryClient();
  const {
    mutate: updateUserImageMutate,
    isPending: isUpdateUserImageMutatePending,
    isSuccess: isUpdateUserImageMutateSuccess,
    isError: isUpdateUserImageMutateError,
  } = useMutation({
    mutationKey: ["updateUserImageMutate"],
    mutationFn: updateUserImageAxios,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["isAuthenticated"] });
    },
  });
  const {
    mutate: updateUserDisplayNameMutate,
    isPending: isUpdateUserDisplayNameMutatePending,
    isSuccess: isUpdateUserDisplayNameMutateSuccess,
    isError: isUpdateUserDisplayNameMutateError,
  } = useMutation({
    mutationKey: ["updateUserDisplayNameMutate"],
    mutationFn: updateUserDisplayNameAxios,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["isAuthenticated"] });
    },
  });

  const {
    mutate: updateUserThemeMutate,
    isPending: isUpdateUserThemeMutatePending,
    isSuccess: isUpdateUserThemeMutateSuccess,
    isError: isUpdateUserThemeMutateError,
  } = useMutation({
    mutationKey: ["updateUserThemeMutate"],
    mutationFn: updateUserThemeAxios,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["isAuthenticated"] });
    },
  });
  return {
    updateUserImageMutate,
    updateUserDisplayNameMutate,
    isUpdateUserDisplayNameMutateSuccess,
    updateUserThemeMutate,
  };
};

export default useUserInfoMutate;
