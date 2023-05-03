import { API_ENDPOINTS } from "@/constants";
import { isObjectEmpty } from "@/utils";
import { HttpClient } from "@/utils/http-client";
import { getParams } from "@/utils/url";
import { useInfiniteQuery } from "react-query";

const transformData = (data: any) => {
  return data.collection;
};

const search = (searchParams: Record<string, string>) => {
  return HttpClient.get(API_ENDPOINTS.SEARCH, searchParams).then(transformData);
};

export const useSearch = (searchParams: any) => {
  return useInfiniteQuery<any>(
    [API_ENDPOINTS.SEARCH, searchParams],
    ({ pageParam, queryKey }) => {
      return search(Object.assign({}, queryKey[1], pageParam));
    },
    {
      getNextPageParam: (lastPage) => {
        const foundNextLink = lastPage?.links?.find((link) => link.rel === "next");
        return foundNextLink ? getParams(new URL(foundNextLink?.href).search) : null;
      },
      enabled: !isObjectEmpty(searchParams)
    }
  );
};
