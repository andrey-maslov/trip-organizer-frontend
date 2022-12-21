const apiPathProd = 'https://trip-organizer-api.up.railway.app';
const apiPathDev = 'http://localhost:8787';

const isDev = process.env.NODE_ENV === 'development'

const baseApiPath = `${isDev ? '' : apiPathProd}`;

export const API = {
  TRIPS: `${baseApiPath}/api/trips`,
};
