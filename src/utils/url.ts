export const buildParams = (params: Record<string, string>): string => {
  let param = Object.entries(params).reduce(
    (str, [key, value]) => (value ? `${str}&${key}=${encodeURIComponent(value)}` : str),
    ""
  );

  if (param) {
    param = param.replace("&", "?");
  }

  return param;
};

export const getParams = (search: string) => Object.fromEntries(new URLSearchParams(search).entries());
