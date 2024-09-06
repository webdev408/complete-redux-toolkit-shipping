import { useDispatch } from 'react-redux';
import { addToCart } from '../app/features/cartSlice';

/* eslint-disable react/prop-types */
const ProductDetails = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddtoCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="container mx-auto transform ease-in-out all duration-200 hover:scale-105">
      <h4>{product.name}</h4>
      <h5>${product.price}</h5>
      <img src={product.image} alt="photos" className="w-40 h-40 rounded" />
      <button className="bg-blue-400 my-2 p-2 text-white hover:bg-blue-700" onClick={() => handleAddtoCart(product)}>
        Add to cart
      </button>
    </div>
  );
};
export default ProductDetails;
