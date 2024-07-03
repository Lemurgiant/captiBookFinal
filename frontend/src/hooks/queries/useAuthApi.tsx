import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { webURL } from "../../features/services";

const fetchAuthStatusAxios = async () => {
  const { data } = await axios.get(`${webURL}protected`, {
    withCredentials: true,
  });
  return data;
};

const useAuthApi = () => {
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
