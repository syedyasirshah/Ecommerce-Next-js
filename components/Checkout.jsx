import { clearCart } from "@/lib/cartSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
const Checkout = () => {
	const [isCheckoutSuccessful, setCheckoutSuccessful] = useState(false);
	const dispatch = useDispatch();
	const handleCheckout = async () => {
		setCheckoutSuccessful(true);

		setTimeout(() => {
			setCheckoutSuccessful(false);
			dispatch(clearCart());
		}, 5000);
	};

	return (
		<div className=' flex items-center justify-center '>
			{isCheckoutSuccessful && (
				<div className='fixed inset-0 bg-blur-bg  flex items-center justify-center'>
					<p className='text-lg font-semibold text-green-600'>
						Checkout successful! Thank you for your order.
					</p>
				</div>
			)}

			<button
				onClick={handleCheckout}
				className='flex items-center justify-center text-sm px-[30px] py-[26px] w-full  rounded-lg bg-black   text-white transition-colors duration-300  focus:outline-none focus:ring  focus:ring-offset-2 disabled:cursor-not-allowed'>
				Check out
			</button>
		</div>
	);
};

export default Checkout;
