// src/services/authService.js
import axios from 'axios';

const API_URL = 'http://your-backend-url/api';

// Register user
export const register = (userData) => axios.post(`${API_URL}/register`, userData);

// Login user
export const login = (credentials) => axios.post(`${API_URL}/login`, credentials);
