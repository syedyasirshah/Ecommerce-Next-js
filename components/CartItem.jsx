import React from "react";
import UpdateItemQuantity from "./UpdateItemQuantity";
import { getCurrentCartItem } from "@/lib/cartSlice";
import { useSelector } from "react-redux";

const CartItem = ({ item }) => {
	return (
		<div className='flex justify-between gap-4 py-8 items-center  border-2 px-4'>
			<div>
				<img src={item.image} alt={item.title} className='w-32' />
			</div>

			<div>
				<p className='font-medium'>{item.title}</p>
			</div>

			<div>{item.price * item.quantity}</div>
			<div>
				<UpdateItemQuantity
					currentQuantity={item.quantity}
					productId={item.id}
				/>
			</div>
		</div>
	);
};

export default CartItem;
