//import Header from "@/components/Header";

//import AllProducts from "@/components/AllProducts";
import ProductsList from "@/components/ProductsList";
//import AppLayout from "./AppLayout";
//import Image from "next/image";

export default function Home() {
	return (
		<>
			{/* <AppLayout>
				<AllProducts />
			</AppLayout> */}
			<ProductsList />
			{/* <Header />
			<main className='flex min-h-screen flex-col items-center justify-between p-24'>
				Main Page
			</main> */}
		</>
	);
}
