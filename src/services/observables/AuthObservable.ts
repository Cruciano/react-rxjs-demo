import { AuthState } from "../../types/auth/authState.ts";
import { AuthPayload } from "../../types/auth/authPayload.ts";
import { User } from "../../types/auth/user.ts";
import { BehaviorSubject } from "rxjs";
import { IAuthObservable } from "../interfaces/IAuthObservable.ts";

export class AuthObservable implements IAuthObservable {
	private readonly loginSubject: BehaviorSubject<AuthState>;

	constructor(loginSubject: BehaviorSubject<AuthState>) {
		this.loginSubject = loginSubject
	}

	private setNextState(payload: AuthPayload){
		const state = this.loginSubject.getValue();
		this.loginSubject.next({ ...state, ...payload });
	};

	setUser(user: User | null) {
		this.setNextState({ user: user, error: '' });
	};

	setLoading(flag: boolean) {
		this.setNextState({ isLoading: flag });
	};

	setError(message: string) {
		this.setNextState({ error: message });
	};

	getObservable() {
		return this.loginSubject;
	};
}
