import React from "react";
import CartItem from "../components/CartItem";
import { Product } from "../components/utils/DataTypes";
import { useAppSelector } from "../app/hooks";
import { Link } from "react-router-dom";

const Cart = () => {
	const cart = useAppSelector((state) => state.cart.cart);

	const totalPrice = cart.reduce(
		(a: any, c: any) => a + c.quantity * c.price,
		0
	);
	//calculate the total quantity of items in the cart
	const totalQuantity = cart.reduce((a: any, c: any) => a + c.quantity, 0);

	return (
		<div className="mx-12  my-8 p-10">
			<h3 className="text-xl font-bold">CART</h3>
			<hr className="w-full mt-5" />

			{cart.length > 0 ? (
				cart.map((item: Product) => <CartItem key={item.id} item={item} />)
			) : (
				<div className="modal-body flex justify-center pt-8 h-96">
					<p className="text-gray-400 text-sm">Your cart is empty</p>
				</div>
			)}
			<div className="mt-5">
				<p>
					Tax 21%: <span className="font-semibold">&#36; 28.50</span>
				</p>
				<p>
					Quantity:
					<span className="font-semibold">{totalQuantity.toFixed(0)}</span>
				</p>
				<p>
					Total:
					<span className="font-semibold">
						{" "}
						&#36; {Number(totalPrice.toFixed(2)) + 28.5}
					</span>
				</p>
				<Link to="/checkout">
					<button className="bg-green-500 text-white w-[15%] py-2 my-2">
						Checkout
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Cart;
