import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  addOneQuoteData,
  deleteOneQuoteData,
  updateOneQuoteData,
} from "../../features/services";

const useQuoteItemApi = () => {
  const queryClient = useQueryClient();
  const {
    mutate: addOneQuoteMutate,
    isPending: isAddOneQuotePending,
  } = useMutation({
    mutationKey: ["addOneQuoteMutate"],
    mutationFn: addOneQuoteData,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["captiBookCollectionQueryData"],
      });
    },
  });

  const {
    mutate: updateOneQuoteMutate,
    isPending: isUpdateOneQuotePending,
  } = useMutation({
    mutationKey: ["updateOneQuoteMutate"],
    mutationFn: updateOneQuoteData,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["captiBookCollectionQueryData"],
      });
    },
  });

  const {
    mutate: deleteOneQuoteMutate,
    isPending: isDeleteOneQuotePending,
  } = useMutation({
    mutationKey: ["deleteOneQuoteMutate"],
    mutationFn: deleteOneQuoteData,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["captiBookCollectionQueryData"],
      });
    },
  });

  return {
    addOneQuoteMutate,
    isAddOneQuotePending,
    updateOneQuoteMutate,
    isUpdateOneQuotePending,
    deleteOneQuoteMutate,
    isDeleteOneQuotePending,
  };
};

export default useQuoteItemApi;
