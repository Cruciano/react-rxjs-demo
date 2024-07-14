import { User } from "../../types/auth/user.ts";
import { Login } from "../../types/auth/login.ts";
import { SignUp } from "../../types/auth/signUp.ts";

export interface IAuthApi {
	login(loginRequest: Login): User;

	signUp(signUpRequest: SignUp): User;
}
