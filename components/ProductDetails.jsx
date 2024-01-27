"use client";
import React from "react";
import { useState, useEffect } from "react";
import ShowProductDetails from "./ShowProductDetails";

import { useParams } from "next/navigation";
const ProductDetails = () => {
	const [product, setProduct] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	const params = useParams();
	console.log("params: ", params);
	useEffect(function () {
		const controller = new AbortController();

		async function fetchProductDetails() {
			try {
				setIsLoading(true);
				setError("");

				const res = await fetch(
					`https://fakestoreapi.com/products/${params.id}`,
					{
						signal: controller.signal,
					}
				);

				if (!res.ok)
					throw new Error("Something went wrong while fetching products");

				const data = await res.json();

				setProduct(data);

				setError("");
			} catch (err) {
				if (err.name !== "AbortError") {
					console.log(err.message);
					setError(err.message);
				}
			} finally {
				setIsLoading(false);
			}
		}

		fetchProductDetails();

		return function () {
			controller.abort();
		};
	}, []);
	return (
		<div>
			<ShowProductDetails product={product} />
		</div>
	);
};

export default ProductDetails;
