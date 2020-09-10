export const dev = {
  apiUrl: 'http://localhost:7071/api'
};

export const production = {
  apiUrl: 'https://benbristowwebsite-funcs.azurewebsites.net/api'
};

export const config = process.env.NODE_ENV === 'development' ? dev : production;