import { API_ENDPOINTS } from "@/constants";
import { SearchAPIParams, SearchCollection } from "@/types/nasa";
import { isObjectEmpty } from "@/utils";
import { getUrlParams } from "@/utils/url";
import { useInfiniteQuery, useQuery } from "react-query";
import { fetchAssets, fetchMetadata, search } from "./client";

export const useSearch = (searchParams: SearchAPIParams) => {
  return useInfiniteQuery<SearchCollection>(
    [API_ENDPOINTS.SEARCH, searchParams],
    ({ pageParam, queryKey }) => {
      return search(Object.assign({}, queryKey[1], pageParam));
    },
    {
      getNextPageParam: (lastPage) => {
        const foundNextLink = lastPage?.links?.find((link) => link.rel === "next");
        return foundNextLink ? getUrlParams(new URL(foundNextLink?.href).search) : null;
      },
      enabled: !isObjectEmpty(searchParams)
    }
  );
};

export const useDetails = (id: string) => {
  return useQuery<any>([API_ENDPOINTS.METADATA, id], () => fetchMetadata(id));
};

export const useImage = (id: string) => {
  return useQuery<any>([API_ENDPOINTS.ASSET, id], () => fetchAssets(id));
};
