import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import CheckOutItems from "../components/CheckOutItems";
import { Product } from "../components/utils/DataTypes";
import paystack from "../img/paystack.png";
import { usePaystackPayment } from "react-paystack";
import { useNavigate } from "react-router-dom";
import { removeAll } from "../features/cart/CartSlice";

const Checkout = () => {
	const [name, setName] = useState<string | null>("");
	const [address, setAddress] = useState<string | null>("");

	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const cart = useAppSelector((state) => state.cart.cart);
	const currency = useAppSelector((state) => state.conditional.currency);

	const totalPrice = cart.reduce(
		(a: any, c: any) => a + c.quantity * c.price,
		0
	);

	const config = {
		reference: new Date().getTime().toString(),
		email: "user@example.com",
		amount: Number(totalPrice * 100),
		publicKey: "pk_test_83ae0aa7ab43ab23487985b2949da142b200581d",
	};

	const initializePayment = usePaystackPayment(config);

	const onSuccess = () => {
		dispatch(removeAll(cart));
		navigate("/");
	};

	const onClose = () => {
		console.log("closed");
	};

	return (
		<div className="flex  justify-between space-x-2  mx-8 my-6">
			<div className="w-1/4 bg-slate-100 mx-8 flex  flex-col py-4 px-4 justify-center">
				<div className="flex  ml-4">
					<div className="squarebox_small  bg-green-500 "></div>
					<div className="ml-4">
						<p className="text-sm font-semibold">Information</p>
					</div>
				</div>
				<div className="flex mt-4 ml-4">
					<div className="squarebox_small  bg-green-500 "></div>
					<div className="ml-4">
						<p className="text-sm font-semibold">Payment</p>
					</div>
				</div>
			</div>
			<div className="w-2/4 ">
				<h2 className="text-xl font-bold py-4 mx-4">Contact Information</h2>

				<div className="w-[80%] my-4">
					<label htmlFor="name">Name</label>
					<input
						type="text"
						name="name"
						// set the value of the input to the value of the name state
						value={name!}
						onChange={(e) => setName(e.target.value)}
						id="name"
						className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-300 italic text-sm"
						placeholder="please enter your name"
					/>
				</div>

				<div className="w-[80%] my-4">
					<label htmlFor="name">Address</label>
					<input
						type="text"
						name="address"
						value={address!}
						onChange={(e) => setAddress(e.target.value)}
						id="name"
						className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-300 italic text-sm"
						placeholder="please enter your address"
					/>
				</div>

				<div className="flex justify-between text-sm font-bold px-2 py-4">
					<div className="w-1/2">
						<p>Name:</p>
					</div>
					<div className="w-1/2"> {name}</div>
				</div>

				<div className="flex justify-between text-sm font-bold px-2 py-4">
					<div className="w-1/2">
						<p>Address</p>
					</div>
					<div className="w-1/2">{address}</div>
				</div>
				<div className="mt-12">
					<button
						className="bg-green-500 text-white px-4 py-2 rounded-md w-[80%]"
						onClick={() => {
							initializePayment(onSuccess, onClose);
						}}
					>
						Pay Now
					</button>
				</div>
				<div className="flex justify-center">
					<div>
						<img src={paystack} alt="" className="w-[100px] h-[60px]" />
					</div>
				</div>
			</div>
			<div className="w-1/4 bg-green-200  rounded-xl  py-4 px-4">
				<h2 className="text-xl font-bold py-4">Shipping Address</h2>
				{cart.length > 0 ? (
					<div className="modal-body overflow-y-scroll scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-gray-500 scrollbar-track-gray-300 scrollbar-track-rounded-full space-y-5 h-96">
						{cart.map((item: Product) => (
							<CheckOutItems key={item.id} item={item} />
						))}
					</div>
				) : (
					<div className="modal-body flex justify-center pt-8 h-96">
						<p className="text-gray-400 text-sm">Your cart is empty</p>
					</div>
				)}
				<div className="flex justify-between text-sm font-bold px-2">
					<div>
						<p>Total</p>
					</div>
					<div>
						<p>
							<span
								className="align-middle font-semibold text-lg"
								dangerouslySetInnerHTML={{ __html: currency }}
							></span>
							{totalPrice.toFixed(2)}
						</p>
					</div>
				</div>
				<div className="flex justify-between text-sm font-bold px-2">
					<div>
						<p>Shipping Fee / Tax</p>
					</div>
					<div>
						<p>
							<span
								className="align-middle font-semibold text-lg"
								dangerouslySetInnerHTML={{ __html: currency }}
							></span>
							28.5
						</p>
					</div>
				</div>
				<div className="flex justify-between text-sm font-bold px-2">
					<div>
						<p>Total</p>
					</div>
					<div>
						<p>
							<span
								className="align-middle font-semibold text-lg"
								dangerouslySetInnerHTML={{ __html: currency }}
							></span>
							{Number(totalPrice.toFixed(2)) + 28.5}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Checkout;
