import { FC, useEffect } from "react";
import { LayoutProps } from "../../types/props/layout.ts";
import { useNavigate } from "@tanstack/react-router";
import { useAuthService } from "../../core/services/useAuthService.ts";

const AuthPageLayout: FC<LayoutProps> = ({ children }) => {
	const navigate = useNavigate();

	const { state: { user } } = useAuthService();

	useEffect(() => {
		if (user) {
			navigate({ to: '/' });
		}
	}, [user]);

	return (
		<>
			{children}
		</>
	);
};

export default AuthPageLayout;
