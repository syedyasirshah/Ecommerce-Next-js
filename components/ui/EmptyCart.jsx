import Link from "next/link";

function EmptyCart() {
	return (
		<div className='px-12 py-8'>
			<Link href='/'>&larr; Back</Link>

			<div className='flex  justify-center items-center gap-12'>
				<p className='mt-7 font-semibold'>
					Your cart is empty. Start ordering...
				</p>
			</div>
		</div>
	);
}

export default EmptyCart;
