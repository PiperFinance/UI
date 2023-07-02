export const sortData = (data: any[], ...keys: string[]) => {
  if (!data) return [];
  return data.sort((a, b) => {
    for (const key of keys) {
      if (Array.isArray(a)) {
        if (Number(a[1][key]) < Number(b[1][key])) return 1;
        if (Number(a[1][key]) > Number(b[1][key])) return -1;
      } else {
        if (Number(a[key]) < Number(b[key])) return 1;
        if (Number(a[key]) > Number(b[key])) return -1;
      }
    }
    return 0;
  });
};
