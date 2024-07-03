import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  addOneTermData,
  deleteOneTermData,
  updateOneTermData,
} from "../../features/services";

const useTermItemApi = () => {
  const queryClient = useQueryClient();
  const {
    mutate: addOneTermMutate,
    isPending: isAddOneTermPending,
  } = useMutation({
    mutationKey: ["addOneTermMutate"],
    mutationFn: addOneTermData,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["captiBookCollectionQueryData"],
      });
    },
  });

  const {
    mutate: updateOneTermMutate,
    isPending: isUpdateOneTermPending,
    isSuccess: isUpdateOneTermSuccess,
  } = useMutation({
    mutationKey: ["updateOneTermMutate"],
    mutationFn: updateOneTermData,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["captiBookCollectionQueryData"],
      });
    },
  });

  const {
    mutate: deleteOneTermMutate,
    isPending: isDeleteOneTermPending,
  } = useMutation({
    mutationKey: ["deleteOneTermMutate"],
    mutationFn: deleteOneTermData,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["captiBookCollectionQueryData"],
      });
    },
  });

  return {
    addOneTermMutate,
    isAddOneTermPending,
    updateOneTermMutate,
    isUpdateOneTermPending,
    isUpdateOneTermSuccess,
    deleteOneTermMutate,
    isDeleteOneTermPending,
  };
};

export default useTermItemApi;
