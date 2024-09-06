import { useSelector } from 'react-redux';
import ProductDetails from './ProductDetails';
import { useEffect } from 'react';
import { setProducts } from '../app/features/productSlice';
import { useDispatch } from 'react-redux';
import goods from '../data';

const Product = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(setProducts(goods));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container mx-auto">
      <h2 className="text-4xl text-center my-8 font-bold">Product List</h2>

      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductDetails key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
export default Product;
