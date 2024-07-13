import * as Yup from "yup";
import {LoginFormData} from "../../types/formData/loginFormData.ts";

export const validationSchemaSignUp: Yup.ObjectSchema<LoginFormData> = Yup.object().shape({
	firstName: Yup.string().required("Required"),
	email: Yup.string().email("Email is not valid").required("Required"),
	password: Yup.string().required("Required"),
	confirmPassword: Yup
		.string()
		.required("Required")
		.oneOf([Yup.ref('password')], 'Passwords must match'),
});
