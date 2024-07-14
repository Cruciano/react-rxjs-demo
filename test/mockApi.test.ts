import "reflect-metadata";
import { expect, test, expectTypeOf } from 'vitest'
import { MockAuthApi } from "../src/api/MockAuthApi";
import { User } from "../src/types/auth/user";
import { Login } from "../src/types/auth/login";
import {SignUp} from "../src/types/auth/signUp";

test('Login, success', () => {
	const mockAuthApi = new MockAuthApi();

	const userToLogin: Login = {
		email: 'johndeere@gmail.com',
		password: '123456qW',
	};

	expectTypeOf(mockAuthApi.login(userToLogin)).toEqualTypeOf(User);
})

test('Login, exception "User with this email do not exists"', () => {
	const mockAuthApi = new MockAuthApi();

	const userToLogin: Login = {
		email: 'johndeere123123@gmail.com',
		password: '123456qW',
	};

	expect(() => mockAuthApi.login(userToLogin)).toThrow(/^User with this email do not exists$/);
})

test('Login, exception "Invalid password"', () => {
	const mockAuthApi = new MockAuthApi();

	const userToLogin: Login = {
		email: 'johndeere@gmail.com',
		password: '111111',
	};

	expect(() => mockAuthApi.login(userToLogin)).toThrow(/^Invalid password$/);
})

test('SignUp, success', () => {
	const mockAuthApi = new MockAuthApi();

	const userToSignUp: SignUp = {
		name: 'Jack Sparrow',
		email: 'jacksparrow@gmail.com',
		password: '123456qWeRt',
		confirmPassword: '123456qWeRt',
	};

	expectTypeOf(mockAuthApi.signUp(userToSignUp)).toEqualTypeOf(User);
})

test('SignUp, exception "User with this email already exists"', () => {
	const mockAuthApi = new MockAuthApi();

	const userToSignUp: SignUp = {
		name: 'Jack Sparrow',
		email: 'johndeere@gmail.com',
		password: '123456qWeRt',
		confirmPassword: '123456qWeRt',
	};

	expect(() => mockAuthApi.signUp(userToSignUp)).toThrow(/^User with this email already exists$/);
})

test('SignUp, exception "Passwords don\'t match"', () => {
	const mockAuthApi = new MockAuthApi();

	const userToSignUp: SignUp = {
		name: 'Jack Sparrow',
		email: 'jacksparrow@gmail.com',
		password: '123456qWeRt',
		confirmPassword: '123456qWeRt1212',
	};

	expect(() => mockAuthApi.signUp(userToSignUp)).toThrow(/^Passwords don't match$/);
})

