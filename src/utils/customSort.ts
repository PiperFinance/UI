export const sortData = (data: any[], ...keys: string[]) => {
  return data.sort((a, b) => {
    for (const key of keys) {
      if (a[key] < b[key]) return 1;
      if (a[key] > b[key]) return -1;
    }
    return 0;
  });
};
