export const handleSliceHashString = (text: string, length = 5) => {
  return text.slice(0, 5) + '...' + text.slice(text.length - length, text.length);
};
