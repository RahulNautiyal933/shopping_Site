import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slices/CartSlice";
import toast from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item removed from cart");
  };

  return (
    <div className="flex gap-12 m-5 p-5">

      <div>
        <img src={item.image} className="h-[150px]" />
      </div>
    
      <div className="flex flex-col justify-evenly w-8/12">
       
        <h1 className="text-gray-700 font-bold text-lg text-left">
          {item.title}
        </h1>
       
        <h1>{item.description.split(" ").slice(0, 15).join(" ") + "..."}</h1>
       
        <div className="flex justify-between">

          <p className="text-green-600 font-semibold">${item.price}</p>
 
          <button className="bg-red-300 rounded-full items-center justify-center p-2" onClick={removeFromCart}>
            <AiFillDelete/>
          </button>
        
        </div>
      
      </div>
    
    </div>
  );
};

export default CartItem;
