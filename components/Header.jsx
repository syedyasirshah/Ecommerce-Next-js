import React from "react";
import Link from "next/link";
import MainNav from "./Main-Nav";
import Search from "./Search";
import NavCart from "./NavCart";
const Header = () => {
	return (
		<header className='flex justify-between items-center gap-2 px-12'>
			<Link href='/' className='font-bold leading-[22.87px] text-lg'>
				Ecommerence
			</Link>
			<MainNav />
			<Search />
			<NavCart />
		</header>
	);
};

export default Header;
