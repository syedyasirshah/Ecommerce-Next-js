"use client";

import { addItemToCart } from "@/lib/cartSlice";
import Link from "next/link";
import React from "react";
import { FaCartPlus } from "react-icons/fa6";
import { useDispatch } from "react-redux";

const ProductCard = ({ product }) => {
	const dispatch = useDispatch();
	const handleAddtoCart = (newProduct) => {
		dispatch(addItemToCart(newProduct));
	};

	return (
		<div className=' flex flex-col justify-between px-2 gap-4  '>
			<Link href={`product-details/${product.id}`}>
				<div className='aspect-h-1  aspect-w-1  overflow-hidden lg:aspect-none group-hover:opacity-75 lg:h-80'>
					<img
						src={product.image}
						alt={product.title}
						className='h-[235px] w-[356px] object-cover object-center p-2  lg:h-full lg:w-full'
					/>
				</div>
			</Link>

			<div>
				<h3 className='text-[20px] font-bold text-black'>{product.title}</h3>
				<h5 className='text-sm font-normal text-gray-700'>
					{product.category}
				</h5>
				{/* <p className='text-[16.88px] font-medium text-gray-900'>
					{product.description}
				</p> */}
				<div>
					<span>Price</span>
					<span className='text-[20px] font-bold py-4'>
						{` $${product.price}`}
					</span>
				</div>

				<button
					onClick={() => handleAddtoCart(product)}
					className='flex items-center justify-center gap-2 text-sm px-[30px] py-[26px] w-[264px]  rounded-lg bg-black   text-white transition-colors duration-300  focus:outline-none focus:ring  focus:ring-offset-2 disabled:cursor-not-allowed'>
					Add to cart
					<FaCartPlus />
				</button>
			</div>
		</div>
	);
};

export default ProductCard;
