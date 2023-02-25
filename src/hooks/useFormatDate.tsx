const useFormatDate = (date: string) => {
  const formattedDate = new Date(date).toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return formattedDate;
};

export default useFormatDate;
