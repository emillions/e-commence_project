import React from "react";

type Props = {
	children: JSX.Element[] | JSX.Element;
};

const PageWrapper: React.FC<Props> = ({ children }) => {
	return <div className="mx-8 p-10 grid grid-cols-3 gap-3 ">{children}</div>;
};

export default PageWrapper;
