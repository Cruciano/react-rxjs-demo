import { FC } from 'react';
import { TextInputProps } from "../../../types/props/textInput.ts";
import { Field } from "formik";

const TextInput: FC<TextInputProps> = ({ title, name, placeholder = "", error, touched }) => {
	return (
		<div className="text-blue-900 w-full">
			<p className="mb-1 text-base">
				{title}
			</p>
			<Field
				type="text"
				className="w-full h-[50px] rounded border border-solid text-blue-900 px-3"
				name={name}
				placeholder={placeholder}
			/>
			{error && touched && (
				<p className="text-rose-500">{error}</p>
			)}
		</div>
	);
};

export default TextInput;