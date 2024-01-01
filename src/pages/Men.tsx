import React from "react";
import PageWrapper from "../components/PageWrapper";
import { Productdata } from "../components/utils/data";
import Card from "../components/Card";

const Men = () => {
	const productmen = Productdata.filter((item) => item.category === "men");

	return (
		<>
			<h1 className="font-normal text-[42px] capitalize mt-5 mx-20">Men</h1>
			<PageWrapper>
				{productmen.map((item: any) => {
					return <Card key={item.id} item={item} />;
				})}
			</PageWrapper>
		</>
	);
};

export default Men;
