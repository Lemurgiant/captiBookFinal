import { useQuery } from "@tanstack/react-query";
import { getAllProductivityDataAxios } from "../../features/services";
import { Session } from "../../interfaces/globalState";

const STALE_TIME = 10000;

const useProductivityApi = () => {
  const {
    data: productivityQueryData = [],
    isLoading: isProductivityQueryLoading,
  } = useQuery<Session[]>({
    queryKey: ["productivityQueryData"],
    queryFn: getAllProductivityDataAxios,
    staleTime: STALE_TIME,
  });

  return { productivityQueryData, isProductivityQueryLoading };
};

export default useProductivityApi;
