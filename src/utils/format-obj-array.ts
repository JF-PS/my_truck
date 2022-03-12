export const arrayToObj = (entries: any) => {
  return Object.values(entries).reduce((acc: any, entry: any) => {
    const { id } = entry;
    acc[id] = entry;
    return acc;
  }, {});
};

export const objToArray = (entries: any) => {
  return Object.values(entries).reduce((acc: any, entry: any) => {
    const { id } = entry;
    acc[id] = entry;
    return acc;
  }, []);
};
