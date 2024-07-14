import { createRootRoute, Outlet } from '@tanstack/react-router'
import MainLayout from "../components/layouts/mainLayout.tsx";

export const Route = createRootRoute({
	component: () => (
		<>
			<MainLayout>
				<Outlet />
			</MainLayout>
		</>
	),
})
