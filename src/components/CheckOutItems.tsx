import React from "react";
import { Product } from "../components/utils/DataTypes";
import { useAppSelector } from "../app/hooks";

type Props = {
	item: Product;
};

const CheckOutItems: React.FC<Props> = ({ item }) => {
	const currency = useAppSelector((state) => state.conditional.currency);

	return (
		<>
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
						<p className="text-xs font-semibold">
							Quantity: <span className="px-4"> 10</span>
						</p>
					</div>
				</div>
				<div>
					<div className="w-4/5 flex">
						<img src={item.imageUrl} alt="" className="w-[150px] h-[100px]" />
					</div>
				</div>
			</div>
			<hr className=" bg-white " />
		</>
	);
};

export default CheckOutItems;
