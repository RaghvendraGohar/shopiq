import React from 'react';
import '../styles/ProductGrid.css';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
  <div className="product-card">
    <img src={product.thumbnail} alt={product.title} />
    <div className="details">
      <h3 className="title">{product.title}</h3>
      <p className="price">₹{product.price}</p>
    </div>
  </div>
);

export default ProductCard;
