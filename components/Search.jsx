"use client";

import { setFilteredProducts } from "@/lib/productsSlice";
import React from "react";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
const Search = () => {
	const [searchItem, setSearchItem] = useState("");
	const dispatch = useDispatch();

	const handleInputChange = (e) => {
		const searchTerm = e.target.value;
		setSearchItem(searchTerm);
		dispatch(setFilteredProducts(searchTerm));
	};
	return (
		<div className='relative text-gray-600 focus-within:text-gray-400'>
			<span class='absolute inset-y-0 right-0 flex items-center pr-2'>
				<button
					type='submit'
					class='p-1 focus:outline-none focus:shadow-outline'>
					<IoSearchOutline />
				</button>
			</span>
			<input
				type='text'
				value={searchItem}
				onChange={handleInputChange}
				placeholder='Search item'
				className='w-[414px] h-16 rounded-2xl px-[19px] border-[1px]  py-5 transition-all
         duration-500 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-black-800 sm:w-64'
			/>
		</div>
	);
};

export default Search;
