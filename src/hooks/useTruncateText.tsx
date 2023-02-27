const useTruncateText = (str: string) => {
  const array = str.trim().split(" ");
  return array.slice(0, 23).join(" ") + "...";
};

export default useTruncateText;
