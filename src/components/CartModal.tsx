import React from "react";
import CartItemsModal from "./CartItemsModal";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { Product } from "./utils/DataTypes";
import { removeAll } from "../features/cart/CartSlice";
import { toggleModalFalse } from "../features/conditional/ConditionalSlice";
import { useNavigate } from "react-router-dom";

const CartModal = () => {
	const cart = useAppSelector((state) => state.cart.cart);
	const modal = useAppSelector((state) => state.conditional.modal);
	const currency = useAppSelector((state) => state.conditional.currency);

	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const totalPrice = cart.reduce(
		(a: any, c: any) => a + c.quantity * c.price,
		0
	);

	return (
		<div className="modal z-50">
			<div className="modal-content">
				<div className="modal-header">
					<div className="flex justify-between items-center my-2">
						<div>
							<p className="text-sm">
								<span className="font-bold">My Bag</span> {cart.length} items
							</p>
						</div>
						<div>
							{cart.length > 0 && (
								<p className="text-xs font-bold text-gray-400">
									clear Cart
									<span
										className="bg-red-500 px-2 py-1 text-white ml-2 cursor-pointer"
										onClick={() => dispatch(removeAll(cart)) as any}
									>
										X
									</span>
								</p>
							)}
						</div>
					</div>

					{cart.length > 0 ? (
						<div className="modal-body overflow-y-scroll scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-gray-500 scrollbar-track-gray-300 scrollbar-track-rounded-full space-y-5 h-96">
							{cart.map((item: Product) => (
								<CartItemsModal key={item.id} item={item} />
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
					<div className="flex justify-between text-sm ">
						<div>
							<button
								className="bg-white w-[130px] py-2 my-2 border border-black"
								onClick={() => {
									dispatch(toggleModalFalse(modal) as any);
									navigate("/cart");
								}}
							>
								VIEW Bag
							</button>
						</div>
						{cart.length > 0 && (
							<div>
								<button
									className="bg-green-500 w-[130px] py-2 my-2 text-white"
									onClick={() => {
										dispatch(toggleModalFalse(modal) as any);
										navigate("/checkout");
									}}
								>
									Check Out
								</button>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartModal;
