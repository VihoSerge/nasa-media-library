export const isValidDate = (dateStr: string | Date): boolean => {
  const date = new Date(dateStr);
  if (Object.prototype.toString.call(date) === "[object Date]") {
    return !isNaN(date.getTime());
  }

  return false;
};
