import { User } from "../../core/auth/models/user.ts";
import { LoginRequest } from "../../core/auth/requests/loginRequest.ts";
import { SignUpRequest } from "../../core/auth/requests/signUpRequest.ts";

export interface IAuthApi {
	login(loginRequest: LoginRequest): User;

	signUp(signUpRequest: SignUpRequest): User;
}
