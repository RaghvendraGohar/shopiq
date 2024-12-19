export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    thumbnail: string;
    images: string[];
    rating: number;
  }
  
  export interface PaginatedProducts {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
  }
  