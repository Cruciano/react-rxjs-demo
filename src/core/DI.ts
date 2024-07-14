import { container } from "tsyringe";
import { BehaviorSubject } from "rxjs";
import { AuthState } from "../types/auth/authState.ts";
import { initialAuthState } from "./initialState/initialAuthState.ts";
import { AuthObservable } from "./services/observables/AuthObservable.ts";

export const registerServicesDependencies = () => {
	container.register<BehaviorSubject<AuthState>>(
		BehaviorSubject<AuthState>,
		{ useValue: new BehaviorSubject<AuthState>(initialAuthState)}
	);
	container.register<AuthObservable>(
		AuthObservable,
		{ useValue:  new AuthObservable(container.resolve(BehaviorSubject<AuthState>))}
	);
};
