import { IAuthApi } from "../api/interfaces/IAuthApi.ts";
import { AuthObservable } from "./observables/AuthObservable.ts";
import { Login } from "../types/auth/login.ts";
import { SignUp } from "../types/auth/signUp.ts";
import { User } from "../types/auth/user.ts";
import { useObservableState } from "../hooks/useObservableState.ts";
import { MockAuthApi } from "../api/MockAuthApi.ts";
import { BehaviorSubject } from "rxjs";
import { AuthState } from "../types/auth/authState.ts";
import { IAuthObservable } from "./interfaces/IAuthObservable.ts";

const initialState: AuthState = {
	user: null,
	isLoading: false,
	error: '',
}

const loginSubject = new BehaviorSubject<AuthState>(initialState);

export const useAuthService = () => {
	const authApi: IAuthApi = new MockAuthApi();
	const authObservable: IAuthObservable = new AuthObservable(loginSubject);

	const state = useObservableState(authObservable.getObservable());

	const login = (login: Login) => {
		try {
			authObservable.setLoading(true);
			const user: User = authApi.login(login);
			authObservable.setUser(user);
		} catch (error: any) {
			authObservable.setError(error.message);
		} finally {
			authObservable.setLoading(false);
		}
	};

	const signUp = (signUp: SignUp) => {
		try {
			authObservable.setLoading(true);
			const user: User = authApi.signUp(signUp);
			authObservable.setUser(user);
		} catch (error: any) {
			authObservable.setError(error.message);
		} finally {
			authObservable.setLoading(false);
		}
	};

	const logOut = () => {
		authObservable.setUser(null);
	}

	return {
		login,
		signUp,
		logOut,
		state,
	}
}