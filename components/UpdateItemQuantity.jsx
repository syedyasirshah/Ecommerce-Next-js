import React from "react";
import { useDispatch } from "react-redux";
import { decreaseItemQuantity, increaseItemQuantity } from "@/lib/cartSlice";

const UpdateItemQuantity = ({ productId, currentQuantity }) => {
	const dispatch = useDispatch();

	return (
		<div className='flex items-center gap-2 md:gap-3'>
			<button
				className='bg-black text-white px-2 rounded-md'
				onClick={() => dispatch(increaseItemQuantity(productId))}>
				+
			</button>
			<span className='text-sm font-medium'>{currentQuantity}</span>
			<button
				className='bg-black text-white px-2 rounded-md'
				onClick={() => dispatch(decreaseItemQuantity(productId))}>
				-
			</button>
		</div>
	);
};

export default UpdateItemQuantity;
