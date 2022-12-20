const apiPathProd = 'https://trip-organizer-backend.andrei-maslau.workers.dev';
const apiPathDev = 'http://localhost:8787';

const isDev = process.env.NODE_ENV === 'development'

const baseApiPath = `${isDev ? '' : apiPathProd}`;

export const API = {
  TRIPS: `${baseApiPath}/api/trips`,
};
