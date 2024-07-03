import { useQuery } from "@tanstack/react-query";
import { getAllProductivityDataAxios } from "../../features/services";
import { productivityData } from "../../features/interface";

const STALE_TIME = 10000;

const useProductivityApi = () => {
  const {
    data: productivityQueryData = [],
    isLoading: isProductivityQueryLoading,
  } = useQuery<productivityData[]>({
    queryKey: ["productivityQueryData"],
    queryFn: getAllProductivityDataAxios,
    staleTime: STALE_TIME,
  });

  return { productivityQueryData, isProductivityQueryLoading };
};

export default useProductivityApi;
