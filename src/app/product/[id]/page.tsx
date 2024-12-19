import { fetchProductById } from '@/utils/api';
import Image from 'next/image';

import '../../../styles/ProductDetails.css';

interface ProductDetailsProps {
  params: { id: string };
}

const ProductDetails = async ({ params }: ProductDetailsProps) => {
  const product = await fetchProductById(Number(params.id));

  return (
    <div className="product-details">
      <div className="image-carousel">
      <Image
          src={product.images[0]} 
         alt={product.title}
          layout="intrinsic"
          width={500} // Define the width
          height={500} // Define the height
          objectFit="contain" // Optional: adjust how the image fits inside the container
        />
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
