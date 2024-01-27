import Header from "@/components/Header";
import React from "react";

const AppLayout = ({ children }) => {
	return (
		<div className='h-screen flex flex-col gap-25'>
			<Header />
			<main className='flex items-center justify-center p-24'>{children}</main>
		</div>
	);
};

export default AppLayout;
