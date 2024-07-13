import { FC, useState } from 'react';
import { TextInputProps } from "../../../types/props/textInput.ts";
import { Field } from "formik";
import EyeIcon from "../../../assets/icons/eye.svg";
import EyeOffIcon from "../../../assets/icons/eye-off.svg";

const PasswordInput: FC<TextInputProps> = ({ title, name, placeholder = "", error, touched }) => {
	const [type, setType] = useState('password');

	const toggleVisibility = () => {
		setType(type => type === 'password' ? 'text' : 'password');
	}

	return (
		<div className="text-blue-900 w-full">
			<p className="mb-1 text-base">
				{title}
			</p>
			<div className="relative h-[50px]">
				<Field
					type={type}
					className="w-full h-full rounded border border-solid text-blue-900 px-3"
					name={name}
					placeholder={placeholder}
				/>
				<div
					className="absolute top-4 right-3 h-[40px] w-[20px] cursor-pointer"
					onClick={toggleVisibility}
				>
					<img src={type === 'password' ? EyeIcon : EyeOffIcon} alt="eye" />
				</div>
			</div>
			{error && touched && (
				<p className="text-rose-500">{error}</p>
			)}
		</div>
	);
};

export default PasswordInput;