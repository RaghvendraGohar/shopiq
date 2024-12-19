import React from 'react';
import Image from 'next/image';
import '../styles/ProductGrid.css';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
  <div className="product-card">
    <Image src={product.thumbnail} alt={product.title} width={100} height={400} />
    <div className="details">
      <h3 className="title">{product.title}</h3>
      <p className="price">₹{product.price}</p>
    </div>
  </div>
);

export default ProductCard;
