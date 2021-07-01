import { authenticatedDelete, authenticatedGet, authenticatedPost, authenticatedPut } from "../calls"
import { DeleteResponse } from "../common"

export interface Category {
  id: string;
  name: string;
}

const getAllCategories = (): Promise<Category[]> => {
  return authenticatedGet("/category");
}

const getCategoryById = (productId: string): Promise<Category> => {
  return authenticatedGet(`/category/${productId}`);
}

const deleteCategoryById = (productId: string): Promise<DeleteResponse> => {
  return authenticatedDelete(`/category/${productId}`);
}

const updateCategory = (prod: Category): Promise<Category> => {
  return authenticatedPut("/category", prod);
}

const createCategory = async (name: string): Promise<Category> => {
  return authenticatedPost("/category", { name });
}

const categoryApi = {
  create: createCategory,
  getAll: getAllCategories,
  update: updateCategory,
  delete: deleteCategoryById,
  getId: getCategoryById,
}

export default categoryApi;