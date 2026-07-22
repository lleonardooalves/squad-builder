import { API_URL } from '../config/api';

type AuthResponse = { access_token: string };
type User = { id: string; email: string };

export async function login(email: string, password: string): Promise<AuthResponse> {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error('Email ou senha inválida');
  }
  return response.json();
}

export async function register(
  email: string,
  password: string,
  name?: string,
): Promise<AuthResponse> {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password, name }),
  });

  if (!response.ok) {
    throw new Error('Erro no cadastro');
  }

  return response.json();
}

export async function getMe(token: string): Promise<User> {
  const response = await fetch(`${API_URL}/auth/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!response.ok) {
    throw new Error('Credenciais Invalidas');
  }

  return response.json();
}
