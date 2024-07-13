import * as Yup from "yup";
import { LoginFormData } from "../../types/formData/loginFormData.ts";

export const validationSchemaLogin: Yup.ObjectSchema<LoginFormData> = Yup.object().shape({
	email: Yup.string().email("Email is not valid").required("Required"),
	password: Yup.string().required("Required"),
});
