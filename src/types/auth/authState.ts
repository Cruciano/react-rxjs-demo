import { User } from "./user.ts";

export type AuthState = {
	user: User | null,
	isLoading: boolean,
	error: string,
}
