/* eslint-disable react-refresh/only-export-components */
import { useDispatch } from 'react-redux';
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../app/features/cartSlice';

export const totalItems = (items) => {
  return items.reduce((total, item) => total + item.quantity, 0);
};

export const totalPrice = (items) => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
};

/* eslint-disable react/prop-types */
const CartProducts = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="w-full mx-auto flex justify-between items-center gap-6">
        <h4 className="mr-4">{item.name}</h4>
        <p className="mr-4">${item.price}</p>
        <img src={item.image} alt="cart photo" className="w-40 h-40 rounded" />
      </div>
      <div className="flex justify-between items-center">
        <button className="bg-yellow-500 p-2 hover:bg-yellow-700 text-white ml-4 pl-4" onClick={() => dispatch(increaseQuantity(item.id))}>
          ➕
        </button>
        <button>{item.quantity}</button>
        <button className="bg-pink-500 p-2 hover:bg-slate-700 text-white mr-2" onClick={() => dispatch(decreaseQuantity(item.id))}>
          ➖
        </button>
      </div>
      <button className="btn" onClick={() => dispatch(removeFromCart(item.id))}>
        Remove
      </button>
    </>
  );
};
export default CartProducts;
