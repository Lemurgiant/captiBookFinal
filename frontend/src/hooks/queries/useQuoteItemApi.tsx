import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addOneQuoteData,
  addOneSummaryData,
  deleteOneQuoteData,
  getAllProductivityDataAxios,
  updateOneQuoteData,
} from "../../features/services";
import { productivityData } from "../../features/interface";

const useQuoteItemApi = () => {
  const queryClient = useQueryClient();
  const {
    mutate: addOneQuoteMutate,
    isPending: isAddOneQuotePending,
    isSuccess: isAddOneQuoteSuccess,
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
    isSuccess: isUpdateOneQuoteSuccess,
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
