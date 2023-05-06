export const isObjectEmpty = (obj) => {
  return obj && obj.constructor === Object && Object.keys(obj).length === 0;
};

export const formatDate = (dateStr: string) => {
  try {
    const strSplit = dateStr.split(" ");
    const date = new Date(strSplit.length > 2 ? dateStr : strSplit[0]);

    return new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(date);
  } catch (error) {
    return null;
  }
};
