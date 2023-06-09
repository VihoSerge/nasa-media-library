import { API_ENDPOINTS } from "@/constants";
import { SearchAPIParams } from "@/types/nasa";
import { HttpClient } from "@/utils/http-client";

const mediaKeys = ["Title", "Location", "Description", "Photographer", "Keywords", "DateCreated", "Image"];
const prefix = "AVAIL";

const transformData = (data: any) => {
  return data.collection;
};

const transformMetadata = (metadata: Record<string, any>) => {
  return mediaKeys.reduce((prev, curr) => ({ ...prev, [curr.toLowerCase()]: metadata[`${prefix}:${curr}`] }), {});
};

const filterImages = (assetsItems: any) => {
  return assetsItems.items.filter((item) => item.href.endsWith(".jpg"))?.[0]?.href;
};

export const search = (searchParams: SearchAPIParams) => {
  return HttpClient.get(API_ENDPOINTS.SEARCH, searchParams).then(transformData);
};

export const fetchMetadata = (id: string) => {
  return HttpClient.get(`${API_ENDPOINTS.METADATA}/${id}`).then((res: any) => {
    return HttpClient.get(res.location).then((res) => {
      return transformMetadata(res);
    });
  });
};

export const fetchAssets = (id: string) => {
  return HttpClient.get(`${API_ENDPOINTS.ASSET}/${id}`).then(transformData).then(filterImages);
};
