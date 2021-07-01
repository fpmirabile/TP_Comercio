import { authenticatedPost } from "../calls";
import { User } from "./user";

export interface LoginTokens {
  tokens: {
    token: string;
    refreshToken: string;
  }
}


const login = (username: string, password: string): Promise<LoginTokens> => {
  return authenticatedPost(`/auth/login`, { username, password });
}

const register = (username: string, password: string, confirmPassword: string): Promise<User> => {
  return authenticatedPost(`/auth/register`, { username, password, confirmPassword });
}

const authApi = {
  login,
  register,
}

export default authApi;