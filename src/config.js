export const dev = {
  apiUrl: 'http://localhost:7071/api'
};

export const production = {
  apiUrl: '/api'
};

export const config = process.env.NODE_ENV === 'development' ? dev : production;
