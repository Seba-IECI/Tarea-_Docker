import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

// Jugadores Actuales
export const getJugadoresActuales = () => api.get('/jugadores-actuales');
export const getJugadorActual = (id) => api.get(`/jugadores-actuales/${id}`);

// Jugadores Históricos
export const getJugadoresHistoricos = () => api.get('/jugadores-historicos');
export const getJugadorHistorico = (id) => api.get(`/jugadores-historicos/${id}`);

// Logros Históricos
export const getLogrosHistoricos = () => api.get('/logros');
export const getLogro = (id) => api.get(`/logros/${id}`);
export const getLogrosPorCategoria = (categoria) => api.get(`/logros/categoria/${categoria}`);

export default api;
