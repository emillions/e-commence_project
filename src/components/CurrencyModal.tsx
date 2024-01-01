import React from "react";
import { useAppDispatch } from "../app/hooks";
import {
	toggleCurrencyModalFalse,
	setCurrency,
} from "../features/conditional/ConditionalSlice";

const CurrencyModal = () => {
	const dispatch = useAppDispatch();

	return (
		<div className="w-[114px] absolute top-4 right-[12%] z-50 bg-white mt-10 shadow-md ">
			<p
				className="font-semibold flex items-center justify-center hover:bg-gray-300 cursor-pointer h-[45px]"
				onClick={() => {
					// setCurrency("&#36;");
					// dispatch(setCurrency("$") as any);
					dispatch(setCurrency({ currency: "&#36;" } as any) as any);
					dispatch(toggleCurrencyModalFalse());
				}}
			>
				&#36; USD
			</p>
			<p
				className="font-semibold flex items-center justify-center hover:bg-gray-300 cursor-pointer h-[45px]"
				onClick={() => {
					// setCurrency("&#8364;");
					dispatch(setCurrency({ currency: "&#8364;" } as any) as any);
					dispatch(toggleCurrencyModalFalse());
				}}
			>
				&#8364; EUR
			</p>
			<p
				className="font-semibold flex items-center justify-center hover:bg-gray-300 cursor-pointer h-[45px]"
				onClick={() => {
					// setCurrency("&#165;");
					dispatch(setCurrency({ currency: "&#165;" } as any) as any);
					// dispatch(setCurrency("&#165;") as any);
					dispatch(toggleCurrencyModalFalse());
				}}
			>
				&#165; JPY
			</p>
		</div>
	);
};

export default CurrencyModal;
