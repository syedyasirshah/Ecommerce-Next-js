"use client";
import ProductCard from "@/components/ProductCard";
import { fetchItemsByCategory } from "@/lib/productsSlice";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const JewelryPage = () => {
	const dispatch = useDispatch();
	const { items, isLoading, error } = useSelector((state) => state.product);

	useEffect(() => {
		dispatch(fetchItemsByCategory("jewelery"));
	}, [dispatch]);
	return (
		<div className='bg-white'>
			<div className='mx-auto max-w-2xl px-4 sm:px-6  lg:max-w-7xl lg:px-8'>
				<div className='className="mt-6 grid grid-cols-1 gap-x-6  gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 '>
					{items.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			</div>
		</div>
	);
};

export default JewelryPage;
