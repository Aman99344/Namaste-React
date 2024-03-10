import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

const dispatch = useDispatch();

  const handleClearCart = () =>{
    dispatch(clearCart());
  }
  
  return (
    <div className="m-4">
      <h1 className="text-center w-fit m-auto px-12 border-2 border-teal-300 rounded-lg bg-pink-100 font-bold text-lg tracking-widest">
        Cart
      </h1>
      <h2 onClick={handleClearCart} className="cursor-pointer w-fit px-8 border-2 border-teal-300 rounded-lg bg-pink-100 font-bold text-lg tracking-widest float-right">
        Clear Cart
      </h2>
      <div className="w-6/12 m-auto">
      {cartItems.length ===0 ? <h1 className="text-center mt-12 text-2xl font-bold tracking-widest">Cart is Empty!!</h1> :  <ItemList items={cartItems} />}
      </div>
    </div>
  );
};

export default Cart;
