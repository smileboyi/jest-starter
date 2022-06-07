const KEY_NAME = "my-app-";

const set = (k: string, v: string) => {
  localStorage.setItem(KEY_NAME + k, v);
};

const get = (k: string) => {
  return localStorage.getItem(KEY_NAME + k);
};

const storage = {
  get,
  set,
};

export default storage;
