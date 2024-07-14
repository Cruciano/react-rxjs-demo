import { User } from "./user.ts";

export type AuthPayload =  {
	user?: User | null,
	isLoading?: boolean,
	error?: string,
}