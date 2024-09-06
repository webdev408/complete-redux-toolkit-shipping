import { useSelector, useDispatch } from 'react-redux';
import CartProducts, { totalItems, totalPrice } from './CartProducts';
import { checkout } from '../app/features/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center my-8">Items in Cart</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cart.products.map((item) => (
          <CartProducts key={item.id} item={item} />
        ))}
      </div>
      <br />
      <hr />
      <div className="container mx-auto bg-purple-100 py-6 rounded-lg">
        <h2 className="text-3xl font-bold text-center my-8">Cart Summary</h2>
        <h4 className="text-2xl text-center font-bold my-2">Total Items: {totalItems(cart.products)}</h4>
        <h4 className="text-2xl text-center font-bold">Total Price: {totalPrice(cart.products).toFixed(2)}</h4>
      </div>
      <hr />
      <br />
      <div className="flex justify-center">
        <button className="bg-lime-400 p-2" onClick={() => dispatch(checkout(cart.id))}>
          Checkout
        </button>
      </div>
    </div>
  );
};
export default Cart;
