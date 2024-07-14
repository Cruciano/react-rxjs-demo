import "reflect-metadata";
import { expectTypeOf, test, expect } from "vitest";
import { registerServicesDependencies } from "../src/core/DI";
import { container } from "tsyringe";
import { BehaviorSubject } from "rxjs";
import { AuthState } from "../src/types/auth/authState";
import { AuthObservable } from "../src/core/services/observables/AuthObservable";
import { User } from "../src/types/auth/user";

registerServicesDependencies();

test('AuthObservable, getObservable() is type of BehaviorSubject<AuthState>', () => {
	const loginSubject = container.resolve(BehaviorSubject<AuthState>);
	const authObservable = new AuthObservable(loginSubject);

	expectTypeOf(authObservable.getObservable()).toEqualTypeOf(BehaviorSubject<AuthState>);
})

test('AuthObservable, setUser success', () => {
	const loginSubject = container.resolve(BehaviorSubject<AuthState>);
	const authObservable = new AuthObservable(loginSubject);

	let user: User | null = {
		id: 0,
		name: 'John Deere',
		email: 'johndeere@gmail.com',
	};

	const subscription = authObservable.getObservable().subscribe(state => {
		user = state.user;
	});

	authObservable.setUser({
		id: 1,
		name: 'Jack Sparrow',
		email: 'jacksparrow@gmail.com',
	});

	subscription.unsubscribe();

	expect(user?.id).toBe(1);
})

test('AuthObservable, setLoading success', () => {
	const loginSubject = container.resolve(BehaviorSubject<AuthState>);
	const authObservable = new AuthObservable(loginSubject);

	let isLoading = false;

	const subscription = authObservable.getObservable().subscribe(state => {
		 isLoading = state.isLoading;
	});

	authObservable.setLoading(true);

	subscription.unsubscribe();

	expect(isLoading).toBe(true);
})

test('AuthObservable, setError success', () => {
	const loginSubject = container.resolve(BehaviorSubject<AuthState>);
	const authObservable = new AuthObservable(loginSubject);

	let error = "";

	const subscription = authObservable.getObservable().subscribe(state => {
		error = state.error;
	});

	authObservable.setError("error");

	subscription.unsubscribe();

	expect(error).toBe("error");
})
