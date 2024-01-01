import React, { useState } from "react";
import { Product } from "../components/utils/DataTypes";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { reduceProduct, incrementProduct } from "../features/cart/CartSlice";

type Props = {
	item: Product;
};

const CartItemsModal: React.FC<Props> = ({ item }) => {
	const [colors, setColors] = useState("black");
	const [size, setSize] = useState("XS");
	const dispatch = useAppDispatch();
	const currency = useAppSelector((state) => state.conditional.currency);

	return (
		<div className="flex justify-between my-2 text-sm gap-3">
			<div>
				<div className="flex flex-col">
					<h3 className="font-semibold ">{item.productName}</h3>
				</div>
				<div className="mt-2">
					<p className="text-xs font-semibold">Price:</p>
				</div>
				<div>
					<p className="font-semibold">
						<span
							className="align-middle font-semibold text-lg"
							dangerouslySetInnerHTML={{ __html: currency }}
						></span>
						{item.price}
					</p>
				</div>
				<div className="my-1">
					<p className="text-xs font-semibold">SIZE:</p>
				</div>
				<div className="flex space-x-1">
					<div
						className={`squarebox_small ${
							size === "XS" && "bg-black text-white"
						} cursor-pointer`}
						onClick={() => setSize("XS")}
					>
						<p className="text-sm">XS</p>
					</div>

					<div
						className={`squarebox_small ${
							size === "S" && "bg-black text-white"
						} cursor-pointer`}
						onClick={() => setSize("S")}
					>
						<p className="text-sm">S</p>
					</div>
					<div
						className={`squarebox_small ${
							size === "M" && "bg-black text-white"
						} cursor-pointer`}
						onClick={() => setSize("M")}
					>
						<p className="text-sm">M</p>
					</div>
					<div
						className={`squarebox_small ${
							size === "L" && "bg-black text-white"
						} cursor-pointer`}
						onClick={() => setSize("L")}
					>
						<p className="text-sm">L</p>
					</div>
				</div>
				<div className="mt-2">
					<p className="text-xs font-semibold">Color:</p>
				</div>
				<div className="flex space-x-2 mt-2">
					<div
						className={`boxcolors_small bg-red-900 ${
							colors === "red" && "border border-green-300"
						} cursor-pointer`}
						onClick={() => setColors("red")}
					></div>
					<div
						className={`boxcolors_small bg-black ${
							colors === "black" && "border border-green-300"
						} cursor-pointer`}
						onClick={() => setColors("black")}
					></div>
					<div
						className={`boxcolors_small bg-green-800 ${
							colors === "green" && "border border-green-300"
						} cursor-pointer`}
						onClick={() => setColors("green")}
					></div>
				</div>
			</div>
			<div className="flex">
				<div className="w-1/5 flex flex-col justify-between">
					<div
						className="squarebox_small cursor-pointer"
						onClick={() => dispatch(reduceProduct(item) as any)}
					>
						<p>-</p>
					</div>
					<div className="squareboxhidden_small">
						<p className="font-bold">{item.quantity}</p>
					</div>
					<div
						className="squarebox_small cursor-pointer"
						onClick={() => dispatch(incrementProduct(item) as any)}
					>
						<p>+</p>
					</div>
				</div>
				<div className="w-4/5 flex">
					<img src={item.imageUrl} alt="" className="w-[250px] h-[210px]" />
				</div>
			</div>
		</div>
	);
};

export default CartItemsModal;
