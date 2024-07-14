import { container } from "tsyringe";
import { IAuthApi } from "../../api/interfaces/IAuthApi.ts";
import { Login } from "../../types/auth/login.ts";
import { SignUp } from "../../types/auth/signUp.ts";
import { User } from "../../types/auth/user.ts";
import { useObservableState } from "../../hooks/useObservableState.ts";
import { MockAuthApi } from "../../api/MockAuthApi.ts";
import { IAuthObservable } from "./interfaces/IAuthObservable.ts";
import { AuthObservable } from "./observables/AuthObservable.ts";

export const useAuthService = () => {
	const authApi: IAuthApi = container.resolve(MockAuthApi);
	const authObservable: IAuthObservable = container.resolve(AuthObservable);

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
	};

	return {
		login,
		signUp,
		logOut,
		state,
	}
}