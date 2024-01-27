import Link from "next/link";
import React from "react";

const MainNav = () => {
	return (
		<nav className='flex gap-[46px] px-6 py-9'>
			<Link
				href='/electronics'
				className='text-base leading-[18.29px] font-normal'>
				Electonics
			</Link>
			<Link
				href='/mens-fashion'
				className='text-base leading-[18.29px] font-normal'>
				Mens Fashion
			</Link>
			<Link
				href='/women-fashion'
				className='text-base leading-[18.29px] font-normal'>
				Womens Fashion{" "}
			</Link>
			<Link href='/jewelry' className='text-base leading-[18.29px] font-normal'>
				Jewelry
			</Link>
		</nav>
	);
};

export default MainNav;
