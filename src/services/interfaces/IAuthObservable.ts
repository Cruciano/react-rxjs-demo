import { BehaviorSubject } from "rxjs";
import { AuthState } from "../../types/auth/authState.ts";
import { User } from "../../types/auth/user.ts";

export interface IAuthObservable {
	setUser(user: User | null): void;

	setLoading(flag: boolean): void;

	setError(message: string): void;

	getObservable(): BehaviorSubject<AuthState>;
}