const objToSearchStr = (obj: Record<string, string | number> = {}) => {
  return Object.keys(obj).reduce((str: string, k: string, i: number) => {
    if (i) {
      str = str + "&" + k + "=" + String(obj[k]);
    } else {
      str = k + "=" + String(obj[k]);
    }
    return str;
  }, "");
};

export default objToSearchStr;
