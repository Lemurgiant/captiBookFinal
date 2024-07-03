import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { BookTrackingData } from "../../features/interface";
import { deleteOneBookCollectionDataAxios } from "../../features/services";
import axios from "axios";

const fetchAuthStatusAxios = async () => {
  const { data } = await axios.get("http://localhost:5000/protected", {
    withCredentials: true,
  });
  return data;
};

const useAuthApi = () => {
  const [sampleState, setsampleState] = useState<string | null>("");
  const { data: authData, isLoading: authLoading } = useQuery<{
    isLoggedIn: boolean;
    userInfo: any;
  }>({
    queryKey: ["isAuthenticated"],
    queryFn: fetchAuthStatusAxios,
    retry: false,
  });

  const isAuthenticated = authData?.isLoggedIn;
  const userInfo = authData?.userInfo;

  return {
    isAuthenticated,
    userInfo,
    authLoading,
  };
};

export default useAuthApi;
