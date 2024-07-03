import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addOneSummaryData,
  deleteOneSummaryData,
  getAllProductivityDataAxios,
  updateOneSummaryData,
} from "../../features/services";
import { productivityData } from "../../features/interface";

const useSummaryItemApi = () => {
  const queryClient = useQueryClient();
  const {
    mutate: addOneSummaryMutate,
    isPending: isAddOneSummaryPending,
    isSuccess: isAddOneSummarySuccess,
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
    isSuccess: isUpdateOneSummarySuccess,
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
