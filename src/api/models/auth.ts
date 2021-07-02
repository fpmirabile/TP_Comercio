import { authenticatedPost } from "../calls";
import { User } from "./user";

export interface LoginTokens {
  tokens: {
    token: string;
    refreshToken: string;
  },
  user: {
    id: User['id'];
    email: User['email'];
    isAdmin: User['isAdmin'];
  };
}


const login = (email: string, password: string): Promise<LoginTokens> => {
  return authenticatedPost(`/auth/login`, { email, password });
}

const register = (email: string, password: string, confirmPassword: string): Promise<User> => {
  return authenticatedPost(`/auth/register`, { email, password, confirmPassword });
}

const authApi = {
  login,
  register,
}

export default authApi;