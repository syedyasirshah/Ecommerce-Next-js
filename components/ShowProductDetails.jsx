import React from "react";
import { FaCartPlus } from "react-icons/fa6";

const ShowProductDetails = ({ product }) => {
	console.log("product: ", product);
	const { title, category, description, image, price } = product;
	return (
		<div className='px-3 flex justify-center items-center h-96 '>
			<div class='w-4/12 shadow-md '>
				<img src={image} alt={title} className='rounded-lg w-80' />
			</div>
			<div className='w-4/12 flex flex-col px-4 py-3 max-h-[500px]'>
				<h2 class='text-2xl font-bold mb-2 pt-2'>{title}</h2>
				<h3 className='text-gray-500'>Category</h3>
				<h4 className='text-black-500'>{category}</h4>
				<h3 className='text-gray-500'>Description</h3>
				<p>{description}</p>
				<h4>Price</h4>
				<p className='text-[20px] font-bold py-4'>{`$${price}`}</p>

				<button className='text-sm px-[30px] py-[20px] w-full mt-8   rounded-lg bg-black   tracking-wide text-white transition-colors duration-300  focus:outline-none focus:ring  focus:ring-offset-2 disabled:cursor-not-allowed'>
					Buy Now
				</button>
			</div>
		</div>
	);
};

export default ShowProductDetails;
