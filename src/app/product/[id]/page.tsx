import { fetchProductById } from '@/utils/api';
import './ProductDetails.css';
import { Key } from 'react';

interface ProductDetailsProps {
  params: { id: string };
}

const ProductDetails = async ({ params }: ProductDetailsProps) => {
  const product = await fetchProductById(Number(params.id));

  return (
    <div className="product-details">
      <div className="image-carousel">
        {product.images.map((img: string | undefined, index: Key | null | undefined) => (
          <img key={index} src={img} alt={product.title} />
        ))}
      </div>
      <div className="info">
        <h1>{product.title}</h1>
        <p className="price">₹{product.price}</p>
        <p>{product.description}</p>
        <button className="btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;
