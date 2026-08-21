export const getLocalStorage = (storageName) => {
  return localStorage.getItem(storageName);
};

export const setLocalStorage = (storageName, access) => {
  localStorage.setItem(storageName, access);
};
export const removeLocalStorage = (storageName) => {
  localStorage.removeItem(storageName);
};
