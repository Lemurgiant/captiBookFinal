import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  addOneSummaryData,
  deleteOneSummaryData,
  updateOneSummaryData,
} from "../../features/services";

const useSummaryItemApi = () => {
  const queryClient = useQueryClient();
  const {
    mutate: addOneSummaryMutate,
    isPending: isAddOneSummaryPending,
  } = useMutation({
    mutationKey: ["addOneSummaryMutate"],
    mutationFn: addOneSummaryData,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["captiBookCollectionQueryData"],
      });
    },
  });

  const {
    mutate: updateOneSummaryMutate,
    isPending: isUpdateOneSummaryPending,
  } = useMutation({
    mutationKey: ["updateOneSummaryMutate"],
    mutationFn: updateOneSummaryData,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["captiBookCollectionQueryData"],
      });
    },
  });

  const {
    mutate: deleteOneSummaryMutate,
    isPending: isDeleteOneSummaryPending,
  } = useMutation({
    mutationKey: ["deleteOneSummaryMutate"],
    mutationFn: deleteOneSummaryData,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["captiBookCollectionQueryData"],
      });
    },
  });

  return {
    addOneSummaryMutate,
    isAddOneSummaryPending,
    updateOneSummaryMutate,
    deleteOneSummaryMutate,
    isDeleteOneSummaryPending,
    isUpdateOneSummaryPending,
  };
};

export default useSummaryItemApi;
