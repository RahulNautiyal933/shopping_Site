import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div>
      {cart.length > 0 ? (
        <div className="grid grid-cols-2 max-w-6xl mx-auto gap-10">
          <div className="divide-y-2 divide-slate-700 p-5">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          <div className="flex flex-col justify-between max-h-screen">
            <div className="mt-10 pt-5">
              <div className="text-green-700 text-xl font-bold">Your Cart</div>
              <div className="text-green-700 text-4xl font-bold">Summary</div>
              <div>
                <p>Total Items:{cart.length}</p>
              </div>
            </div>

            <div className="mb-14">
              <div className="mb-2">
                <p>Total Amount:<span className="font-extrabold">${totalAmount}</span></p>
              </div>
              <div>
                <button className="bg-green-700 w-1/2 rounded-md text-white font-bold px-4 py-2">Checkout Now</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center h-[100vh] items-center text-xl">
          <h1>Cart is empty</h1>
          <NavLink to={"/"}>
            <button className="bg-green-600 px-3 py-1 rounded-md">Shop Now</button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Cart;
