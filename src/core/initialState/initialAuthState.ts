import { AuthState } from "../../types/auth/authState.ts";

export const initialAuthState: AuthState = {
	user: null,
	isLoading: false,
	error: '',
}