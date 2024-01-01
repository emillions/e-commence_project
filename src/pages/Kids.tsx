import React from "react";
import PageWrapper from "../components/PageWrapper";
import { Productdata } from "../components/utils/data";
import Card from "../components/Card";

const Kids = () => {
	const productKids = Productdata.filter((item) => item.category === "kid");

	return (
		<>
			<h1 className="font-normal text-[42px] capitalize mt-5 mx-20">
					kids
				</h1>
			<PageWrapper>
				{productKids.map((item: any) => {
					return <Card key={item.id} item={item} />;
				})}
			</PageWrapper>
		</>
	);
};

export default Kids;
