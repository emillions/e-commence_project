import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Productdata } from "../components/utils/data";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { addToCart } from "../features/cart/CartSlice";
import { Link } from "react-router-dom";
import ArrowLeft from "../components/icons/ArrowLeft";

const ProductPage = () => {
	const [colors, setColors] = useState("black");
	const [size, setSize] = useState("XS");
	const { id } = useParams();
	const dispatch = useAppDispatch();

	const cart = useAppSelector((state) => state.cart.cart);
	const currency = useAppSelector((state) => state.conditional.currency);

	const product = Productdata.find((item) => item.id === Number(id));

	const addToCartFunction = (newproduct: any) => {
		dispatch(addToCart(newproduct));
		console.log(cart);
	};

	return (
		<>
			<Link to="/">
				<button className="flex items-center text-pry-black mx-6 p-10">
					<ArrowLeft />
					<span className="ml-6 text-xl">
						{product?.category} /{" "}
						<span className="text-sm">{product?.productName}</span>
					</span>
				</button>
			</Link>
			<section className="flex m-8 p-10 space-x-3">
				<div className="w-1/6 flex flex-col space-y-10">
					<div className="w-[100px] h-[50px] ml-auto mb-4">
						<img src={product?.imageUrl} alt="" className="w-full" />
					</div>
					<div className="w-[100px] h-[50px] ml-auto mb-4">
						<img src={product?.imageUrl} alt="" className="w-full" />
					</div>
					<div className="w-[100px] h-[50px] ml-auto pt-4">
						<img src={product?.imageUrl} alt="" className="w-full;" />
					</div>
				</div>
				<div className="w-3/6 ">
					<img
						src={product?.imageUrl}
						alt="product"
						className="w-[450px] h-[400px]"
					/>
				</div>
				<div className="w-2/6 flex flex-col space-y-2">
					<div>
						<h3 className="font-semibold text-lg">Appollo</h3>
						<h3 className="text-lg">{product?.productName}</h3>
					</div>
					<div>
						<p>SIZE:</p>
					</div>
					<div className="flex space-x-3">
						<div
							className={`squarebox ${
								size === "XS" && "bg-black text-white"
							} cursor-pointer`}
							onClick={() => setSize("XS")}
						>
							<p>XS</p>
						</div>

						<div
							className={`squarebox ${
								size === "S" && "bg-black text-white"
							} cursor-pointer`}
							onClick={() => setSize("S")}
						>
							<p>S</p>
						</div>
						<div
							className={`squarebox ${
								size === "M" && "bg-black text-white"
							} cursor-pointer`}
							onClick={() => setSize("M")}
						>
							<p>M</p>
						</div>
						<div
							className={`squarebox ${
								size === "L" && "bg-black text-white"
							} cursor-pointer`}
							onClick={() => setSize("L")}
						>
							<p>L</p>
						</div>
					</div>
					<div>
						<p>Color:</p>
					</div>
					<div className="flex space-x-2">
						<div
							className={`boxcolors bg-red-900 ${
								colors === "red" && "border border-green-300"
							} cursor-pointer`}
							onClick={() => setColors("red")}
						></div>
						<div
							className={`boxcolors bg-black ${
								colors === "black" && "border border-green-300"
							} cursor-pointer`}
							onClick={() => setColors("black")}
						></div>
						<div
							className={`boxcolors bg-green-800 ${
								colors === "green" && "border border-green-300"
							} cursor-pointer`}
							onClick={() => setColors("green")}
						></div>
					</div>
					<div>
						<p>Price:</p>
					</div>
					<div>
						<p className="font-semibold">
							{" "}
							<span
								className="align-middle font-semibold text-lg"
								dangerouslySetInnerHTML={{ __html: currency }}
							></span>
							{product?.price}
						</p>
					</div>
					<div>
						<button
							className="bg-green-500 text-white w-[80%] py-2"
							onClick={() => addToCartFunction(product!)}
						>
							Add to Cart
						</button>
					</div>
					<div>
						<p className="text-justify text-xs w-[80%] mt-4">
							Find stunning women's cocktail dresses and party dresses. Stand
							out in lace and metallic cocktail dresses and party dresses from
							all your favorite brands.
						</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default ProductPage;
