export const handleSliceHashString = (text: string) => {
  return text.slice(0, 5) + "..." + text.slice(text.length - 5, text.length);
};
