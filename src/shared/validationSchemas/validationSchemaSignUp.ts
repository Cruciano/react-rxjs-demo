import * as Yup from "yup";
import { SignUp } from "../../types/auth/signUp.ts";

export const validationSchemaSignUp: Yup.ObjectSchema<SignUp> = Yup.object().shape({
	name: Yup.string().required("Required"),
	email: Yup.string().email("Email is not valid").required("Required"),
	password: Yup
		.string()
		.required("Required")
		.matches(/(?=.*[0-9])/, 'Passwords must have digit (\'0\'-\'9\')')
		.matches(/(?=.*[a-z])/, 'Passwords must have lowercase (\'a\'-\'z\')')
		.matches(/(?=.*[A-Z])/, 'Passwords must have uppercase (\'A\'-\'Z\')')
		.matches(/^.{6,}/, 'Passwords must be at least 6 characters'),
	confirmPassword: Yup
		.string()
		.required("Required")
		.oneOf([Yup.ref('password')], 'Passwords must match'),
});
