import { authenticatedDelete, authenticatedGet, authenticatedPut } from "../calls";
import { DeleteResponse } from "../common";

export interface User {
  id: string;
  email: string;
  isAdmin: boolean;
}

const getAllUsers = (): Promise<User> => {
  return authenticatedGet('/users');
}

const findUserById = (userId: string): Promise<User> => {
  return authenticatedGet(`/users/${userId}`);
}

const deleteUserById = (userId: string): Promise<DeleteResponse> => {
  return authenticatedDelete(`/users/${userId}`)
}

const updateUser = (userId: string, email: string, isAdmin?: boolean, password?: string): Promise<User> => {
  return authenticatedPut('/users', { id: userId, email, isAdmin, password });
}

const userApi = {
  getAll: getAllUsers,
  getById: findUserById,
  deleteById: deleteUserById,
  update: updateUser,
}

export default userApi;
