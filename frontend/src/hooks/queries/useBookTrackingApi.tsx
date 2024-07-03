import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect } from "react";
import {
  BookCollectionApiData,
  BookTrackingData,
} from "../../features/interface";
import {
  deleteOneBookCollectionDataAxios,
  getAllCaptiBookCollectionApi,
} from "../../features/services";
import { CaptiBookData } from "../../interfaces/globalState";

const STALE_TIME = 10000;

const useBookTrackingApi = () => {
  const queryClient = useQueryClient();
  const {
    data: captiBookCollectionQueryData = [],
    isLoading: isCaptiBookCollectionQueryLoading,
    isSuccess: isCaptiBookCollectionQuerySuccess,
  } = useQuery<CaptiBookData[]>({
    queryKey: ["captiBookCollectionQueryData"],
    queryFn: getAllCaptiBookCollectionApi,
    staleTime: STALE_TIME,
  });

  const {
    mutate: deleteBookMutate,
    isPending: isDeleteBookMutatePending,
    isSuccess: isDeleteBookMutateSuccess,
  } = useMutation({
    mutationKey: ["deleteBookMutate"],
    mutationFn: deleteOneBookCollectionDataAxios,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["captiBookCollectionQueryData"],
      });
    },
  });

  return {
    captiBookCollectionQueryData,
    isCaptiBookCollectionQueryLoading,
    deleteBookMutate,
    isDeleteBookMutatePending,
    isDeleteBookMutateSuccess,
    isCaptiBookCollectionQuerySuccess,
  };
};

export default useBookTrackingApi;
