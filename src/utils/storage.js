// eslint-disable-next-line no-undef
const { localStorage } = window;
const rootKey = 'recipes';

const get = (name) => {
  const obj = JSON.parse(localStorage.getItem(rootKey));
  return obj[name];
};

const getAll = () => {
  const obj = JSON.parse(localStorage.getItem(rootKey));
  return obj;
};

const set = (name, value) => {
  const obj = JSON.parse(localStorage.getItem(rootKey));
  const newObj = obj ? [...obj, [name, value]] : [[name, value]];
  localStorage.setItem(rootKey, JSON.stringify(newObj));
};

const remove = (index) => {
  const obj = JSON.parse(localStorage.getItem(rootKey));
  obj.splice(index, 1);
  localStorage.setItem(rootKey, JSON.stringify(obj));
};

const edit = (index, name, value) => {
  const obj = JSON.parse(localStorage.getItem(rootKey));
  obj.splice(index, 1, [name, value]);
  localStorage.setItem(rootKey, JSON.stringify(obj));
};

export const storage = {
  get,
  getAll,
  set,
  remove,
  edit,
};
