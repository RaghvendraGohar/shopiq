import { PaginatedProducts, Product } from '@/types/product';

export const fetchProducts = async (page: number, limit: number): Promise<Product[]> => {
  const response = await fetch(`https://dummyjson.com/products?skip=${(page - 1) * limit}&limit=${limit}`);
  const data: PaginatedProducts = await response.json();
  return data.products;
};

export const fetchProductById = async (id: number): Promise<Product> => {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const data: Product = await response.json();
  return data;
};
