import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  updateUserDisplayNameAxios,
  updateUserImageAxios,
  updateUserThemeAxios,
} from "../../features/services";

const useUserInfoMutate = () => {
  const queryClient = useQueryClient();
  const { mutate: updateUserImageMutate } = useMutation({
    mutationKey: ["updateUserImageMutate"],
    mutationFn: updateUserImageAxios,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["isAuthenticated"] });
    },
  });
  const {
    mutate: updateUserDisplayNameMutate,
    isSuccess: isUpdateUserDisplayNameMutateSuccess,
  } = useMutation({
    mutationKey: ["updateUserDisplayNameMutate"],
    mutationFn: updateUserDisplayNameAxios,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["isAuthenticated"] });
    },
  });

  const { mutate: updateUserThemeMutate } = useMutation({
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
