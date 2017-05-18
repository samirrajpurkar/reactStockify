export const partial = (fn, ...args) => fn.bind(null, ...args);

const _pipe = (f, g) => (...args) => g(f(...args));
export const pipe = (...fns) => fns.reduce(_pipe);
export const removeComma = (s) => {
  if (s && s.indexOf(',') === -1) {
    return s;
  } else {
    return s.replace(',','');
  }
};