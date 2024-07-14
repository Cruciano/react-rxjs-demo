import * as Yup from "yup";
import { LoginRequest } from "../../core/auth/requests/loginRequest.ts";

export const validationSchemaLogin: Yup.ObjectSchema<LoginRequest> = Yup.object().shape({
	email: Yup.string().email("Email is not valid").required("Required"),
	password: Yup.string().required("Required"),
});
