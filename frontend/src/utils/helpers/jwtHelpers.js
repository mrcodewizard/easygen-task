import { jwtDecode } from 'jwt-decode';

export const isTokenValid = () => {
  const token = localStorage.getItem('_token'); // Replace 'accessToken' with your token key
  if (token) {
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000; // Get current time in seconds
    return decodedToken.exp > currentTime; // Check if token expiration time is in the future
  }
  return false; // Token doesn't exist or is invalid
};