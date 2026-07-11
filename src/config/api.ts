import Constants from 'expo-constants';

//Buscar o IP do localhost do computador para que o app consiga se conectar com a API
const debuggerHost = Constants.expoConfig?.hostUri;
const host = debuggerHost?.split(':')[0] ?? 'localhost';

export const API_URL = `http://${host}:3000`;
