export const sortData = (data: any[], ...keys: string[]) => {
  return data.sort((a, b) => {
    for (const key of keys) {
      if (Array.isArray(a)) {
        if (a[1][key] < b[1][key]) return 1;
        if (a[1][key] > b[1][key]) return -1;
      } else {
        if (a[key] < b[key]) return 1;
        if (a[key] > b[key]) return -1;
      }
    }
    return 0;
  });
};
