import { IAuthApi } from "./interfaces/IAuthApi.ts";
import { Login } from "../types/auth/login.ts";
import { User } from "../types/auth/user.ts";
import { SignUp } from "../types/auth/signUp.ts";
import { singleton } from "tsyringe";

@singleton()
export class MockAuthApi implements IAuthApi {
	private users: (User & { password: string })[] = [];

	constructor() {
		this.users.push({
			id: 0,
			name: 'John Deere',
			email: 'johndeere@gmail.com',
			password: '123456qW',
		});
	}

	signUp(signUpRequest: SignUp): User {
		if (!!this.users.find(user => user.email === signUpRequest.email)) {
			throw new Error("User with this email already exists");
		}

		if (signUpRequest.password !== signUpRequest.confirmPassword) {
			throw new Error("Passwords don't match");
		}

		const lastUser = this.users.length > 0 ? this.users[this.users.length - 1] : null;

		const newUser = {
			id: lastUser ? lastUser.id + 1 : 0,
			name: signUpRequest.name,
			email: signUpRequest.email,
			password: signUpRequest.password,
		};

		this.users.push(newUser);

		return {
			id: newUser.id,
			name: newUser.name,
			email: newUser.email,
		};
	};

	login(loginRequest: Login): User {
		 const userInDB = this.users.find(user => user.email === loginRequest.email);

		 if (!userInDB) {
			 throw new Error("User with this email do not exists");
		 }

		 if (userInDB.password !== loginRequest.password) {
			 throw new Error("Invalid password");
		 }

		 return {
			 id: userInDB.id,
			 name: userInDB.name,
			 email: userInDB.email,
		 };
	};
}