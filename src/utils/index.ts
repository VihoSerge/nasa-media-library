export const isObjectEmpty = (obj) => {
  return obj && obj.constructor === Object && Object.keys(obj).length === 0;
};

export const formatDate = (dateStr: string) => {
  try {
    const date = new Date(dateStr);

    return new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(date);
  } catch (error) {
    return null;
  }
};
