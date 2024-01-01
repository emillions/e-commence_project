import React, { useState } from "react";
import { Product } from "./utils/DataTypes";
import { Link } from "react-router-dom";
import addtocart from "../img/addtocart.svg";
import { useAppSelector } from "../app/hooks";

type Props = {
	item: Product;
};

const Card: React.FC<Props> = ({ item }) => {
	const [showAddToCart, setShowAddToCart] = useState(false);

	const currency = useAppSelector((state) => state.conditional.currency);

	return (
		<Link to={`/product/${item.id}`} className="mx-auto">
			<div
				className="w-[280px] hover:shadow-lg content-center bg-blend-darken"
				onMouseOver={() => setShowAddToCart(true)}
				onMouseLeave={() => setShowAddToCart(false)}
			>
				<img src={item.imageUrl} alt="item" className="img-full p-3" />
				<div className="mt-5 p-3 relative">
					{showAddToCart && (
						<img
							className="absolute top-[-65px] right-5 z-50"
							src={addtocart}
							alt="addtocart"
							title="Add to cart"
							onClick={() => {
								console.log("Add to cart");
							}}
						/>
					)}
					<p className="text-sm">{item.productName}</p>
					<p className="text-sm font-semibold">
						<span
							className="align-middle font-semibold text-lg"
							dangerouslySetInnerHTML={{ __html: currency }}
						></span>
						{item.price}
					</p>
				</div>
			</div>
		</Link>
	);
};

export default Card;
