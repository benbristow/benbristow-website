export const dev = {
  apiUrl: 'https://localhost:7238'
};

export const production = {
  apiUrl: 'https://api2.ben.bristow.me'
};

export default process.env.NODE_ENV === 'development' ? dev : production;
