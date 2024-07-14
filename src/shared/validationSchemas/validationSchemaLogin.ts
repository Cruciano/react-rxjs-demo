import * as Yup from "yup";
import { Login } from "../../types/auth/login.ts";

export const validationSchemaLogin: Yup.ObjectSchema<Login> = Yup.object().shape({
	email: Yup.string().email("Email is not valid").required("Required"),
	password: Yup.string().required("Required"),
});
