"use client";
import CartItem from "@/components/CartItem";
import Checkout from "@/components/Checkout";
import Button from "@/components/ui/Button";
import EmptyCart from "@/components/ui/EmptyCart";
import { getCart } from "@/lib/cartSlice";
import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
	const cart = useSelector(getCart);
	const totalPrice = cart.reduce((accumulator, item) => {
		return accumulator + item.price * item.quantity;
	}, 0);
	const totalProducts = cart.reduce((accumulator, item) => {
		return accumulator + item.quantity;
	}, 0);
	if (cart.length === 0) return <EmptyCart />;
	return (
		<div className='px-4'>
			<h3 className='text-lg py-3 mb-4 font-bold pl-2'>Your Cart</h3>
			<div className='px-8 flex gap-4'>
				<div className='w-8/12'>
					<div className='flex flex-col gap-3 rounded-xl h-[166px]'>
						{cart.map((item) => (
							<CartItem item={item} key={item.id} />
						))}
					</div>
				</div>
				<div className='w-4/12 flex flex-col justify-between gap-24 border-4  px-4'>
					<div>
						<h3 className='text-lg font-bold py-5'>Your Total</h3>
						<div className='flex justify-between py-4 text-lg font-bold'>
							<span> Products {totalProducts}</span>
							<span>{`$${totalPrice.toFixed(3)}`}</span>
						</div>
					</div>
					<div>
						<div className='flex justify-between py-5 text-lg font-bold'>
							<span>Total</span>
							<span>{`$${totalPrice.toFixed(3)}`}</span>
						</div>
						{/* <button className='flex items-center justify-center text-sm px-[30px] py-[26px] w-full  rounded-lg bg-black   text-white transition-colors duration-300  focus:outline-none focus:ring  focus:ring-offset-2 disabled:cursor-not-allowed'>
							Check out
						</button> */}
						<Checkout />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
