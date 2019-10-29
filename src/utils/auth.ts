const TOKEN_KEY = 'corret-code-token-key';

export const getAuthToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const setAuthToken = (token: any) => {
  if (typeof token === 'string') {
    localStorage.setItem(TOKEN_KEY, token);
  }
};

export const destroyAuthToken = () => {
  return localStorage.removeItem(TOKEN_KEY);
};
