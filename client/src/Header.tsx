import React from "react";
import { TfiAlignJustify } from "react-icons/tfi";
import CircularProgressBar from "./CircularProgressBar";

const Header: React.FC = () => {
	return (
		<header className="flex p-8 justify-between sm:justify-around items-center">
			<div>
				<a href="/" className="flex items-center gap-2">
					<TfiAlignJustify className="text-2xl" />
					<h1 className="text-3xl font-bold">Baserow</h1>
				</a>
			</div>
			<CircularProgressBar />
		</header>
	);
};

export default Header;
