import { API_ENDPOINTS } from "@/constants";
import { isObjectEmpty } from "@/utils";
import { HttpClient } from "@/utils/http-client";
import { getParams } from "@/utils/url";
import { useInfiniteQuery, useQuery } from "react-query";

const mediaKeys = ["Title", "Location", "Description", "Photographer", "Keywords", "DateCreated", "Image"];
const prefix = "AVAIL";

const transformData = (data: any) => {
  return data.collection;
};

const transformMetadata = (metadata: Record<string, any>) => {
  return mediaKeys.reduce((prev, curr) => ({ ...prev, [curr.toLowerCase()]: metadata[`${prefix}:${curr}`] }), {});
};

const search = (searchParams: Record<string, string>) => {
  return HttpClient.get(API_ENDPOINTS.SEARCH, searchParams).then(transformData);
};

const fetchMetadata = (id: string) => {
  return HttpClient.get(`${API_ENDPOINTS.METADATA}/${id}`).then((res: any) => {
    return HttpClient.get(res.location).then((res) => {
      return transformMetadata(res);
    });
  });
};

const filterImages = (assetsItems: any) => {
  console.log(assetsItems.items);
  return assetsItems.items.filter((item) => item.href.endsWith(".jpg"))?.[0]?.href;
};

const fetchAssets = (id: string) => {
  return HttpClient.get(`${API_ENDPOINTS.ASSET}/${id}`).then(transformData).then(filterImages);
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

export const useDetails = (id: string) => {
  return useQuery<any>([API_ENDPOINTS.METADATA, id], () => fetchMetadata(id));
};

export const useImage = (id: string) => {
  return useQuery<any>([API_ENDPOINTS.ASSET, id], () => fetchAssets(id));
};
