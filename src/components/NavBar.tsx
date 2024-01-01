import React from "react";
import IconBag from "../img/a-logo.svg";
import Vector from "../img/cart.svg";
import dropDown from "../img/dropDown.png";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import {
	toggleModal,
	toggleCurrencyModal,
} from "../features/conditional/ConditionalSlice";

type Props = {
	category: string;
	setCategory: React.Dispatch<React.SetStateAction<string>>;
};
const NavBar: React.FC<Props> = ({ category, setCategory }) => {
	const dispatch = useAppDispatch();

	const cart = useAppSelector((state) => state.cart.cart);

	const modal = useAppSelector((state) => state.conditional.modal);
	const currencyModal = useAppSelector(
		(state) => state.conditional.currencyModal
	);

	const currency = useAppSelector((state) => state.conditional.currency);

	const handleActiveMenu = (menu: string) => {
		setCategory(menu);
	};
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light flex justify-around items-center">
			<div>
				<ul className="flex space-x-5">
					<li
						className={`hover:text-green-600 hover:border-b-2 py-4 border-green-600 text-base px-2 ${
							category === "women" && "text-green-600 border-b-2"
						}`}
						onClick={() => {
							handleActiveMenu("women");
						}}
					>
						<Link to="/">WOMEN</Link>
					</li>
					<li
						className={`hover:text-green-600 hover:border-b-2 border-green-600 py-4 text-base px-2 ${
							category === "men" && "text-green-600 border-b-2"
						}`}
						onClick={() => {
							handleActiveMenu("men");
						}}
					>
						<Link to="/men">MEN</Link>
					</li>
					<li
						className={`hover:text-green-600 hover:border-b-2 border-green-600 py-4 text-base px-2 ${
							category === "kids" && "text-green-600 border-b-2"
						}`}
						onClick={() => {
							handleActiveMenu("kids");
						}}
					>
						<Link to="/kids">KIDS</Link>
					</li>
				</ul>
			</div>
			<div>
				<img src={IconBag} alt="logo" />
			</div>
			<div className="flex items-center space-x-2 cursor-pointer">
				<div>
					<span
						className="align-middle font-semibold text-lg"
						dangerouslySetInnerHTML={{ __html: currency }}
					></span>
				</div>
				<div
					onClick={() => dispatch(toggleCurrencyModal(currencyModal) as any)}
				>
					<img className="align-middle px-2" src={dropDown} alt="dropdown" />
				</div>
				<div onClick={() => dispatch(toggleModal(modal) as any)}>
					<li className="font-sans block mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-black hover:text-gray-700">
						<div className="relative flex">
							<img
								src={Vector}
								alt=""
								className="flex-1 w-8 h-8 fill-current ml-[-4px]"
							/>
							<span
								className={`absolute right-0 top-0 rounded-full w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center ${
									cart.length === 0 ? "bg-red-600" : "bg-black"
								}`}
							>
								{cart.length}
							</span>
						</div>
					</li>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
