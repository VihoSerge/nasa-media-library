import { isValidDate } from "./date";

export const buildUrlParams = (params: Record<string, string>): string => {
  let param = Object.entries(params).reduce(
    (str, [key, value]) => (value ? `${str}&${key}=${encodeURIComponent(value)}` : str),
    ""
  );

  if (param) {
    param = param.replace("&", "?");
  }

  return param;
};

export const getUrlParams = (search: string) => Object.fromEntries(new URLSearchParams(search).entries());

export interface IFilterMatching {
  key: string;
  transform?: (...params: any[]) => any;
}

export const filterParams = <T>(filter: Record<string, any>, mathching: Record<string, IFilterMatching>): T => {
  return Object.entries(filter).reduce((prev, [key, value]): T => {
    if (value && key in mathching) {
      const newValue = mathching[key]?.transform ? mathching[key].transform(value) : value;

      if (newValue) {
        prev[mathching[key].key] = newValue;
      }
    }
    return prev;
  }, {} as T);
};

export const URL_KEYS_FILTER: Record<string, IFilterMatching> = {
  q: {
    key: "q"
  },
  year_start: {
    key: "year_start",
    transform: (value: string) => {
      return isValidDate(value) ? new Date(value)?.getFullYear().toString() : null;
    }
  },
  year_end: {
    key: "year_end",
    transform: (value: string) => {
      return isValidDate(value) ? new Date(value)?.getFullYear().toString() : null;
    }
  }
};
