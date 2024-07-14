import { FC } from 'react';
import { ButtonProps } from "../../types/props/button.ts";

const Button: FC<ButtonProps> = ({title, className, type }) => {
	return (
		<button
			className={`py-3.5 px-10 w-full text-white bg-sky-600 rounded-full text-regalBlue text-base font-bold
						border border-solid border-sky-600 md:w-auto hover:text-sky-600 hover:bg-white ${className}`}
			type={type}
		>
			{title}
		</button>
	);
};

export default Button;