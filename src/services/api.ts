import { API_URL } from '../config/api';
import { useAuthStore } from '../stores/authStore';

export async function authFetch(path: string, options: RequestInit = {}) {
  const token = useAuthStore.getState().token;

  return fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  });
}
