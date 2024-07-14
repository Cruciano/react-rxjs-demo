import { FC } from "react";
import { LayoutProps } from "../../types/props/layout.ts";
import Header from "../ui/header.tsx";

const MainLayout: FC<LayoutProps> = ({ children }) => {
	return (
		<div>
			<Header />
			<div className="container px-4 mx-auto">
				{children}
			</div>
		</div>
	);
};

export default MainLayout;
