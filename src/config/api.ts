import Constants from 'expo-constants';

// Se EXPO_PUBLIC_API_URL estiver definida, usa ela (produção).
// Senão, cai no IP da máquina de dev (desenvolvimento local).
const productionUrl = process.env.EXPO_PUBLIC_API_URL;
const debuggerHost = Constants.expoConfig?.hostUri;
const localHost = debuggerHost?.split(':')[0] ?? 'localhost';

export const API_URL = productionUrl ?? `http://${localHost}:3000`;
