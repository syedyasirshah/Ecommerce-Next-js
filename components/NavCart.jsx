"use client";
import { getCart } from "@/lib/cartSlice";
import Link from "next/link";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const NavCart = () => {
	const cart = useSelector(getCart).length;

	return (
		<Link href='/cart'>
			<div className='h-16 w-36 bg-black rounded-[15px] flex gap-2 items-center justify-center px-[50px] py-5  text-sky-50'>
				<span>{cart}</span>
				<span>
					<FaShoppingCart />
				</span>
			</div>
		</Link>
	);
};

export default NavCart;
