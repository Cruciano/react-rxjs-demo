import { createFileRoute, Link, } from '@tanstack/react-router';
import LoginForm from "../components/forms/loginForm.tsx";
import { Flex } from "@radix-ui/themes";
import AuthPageLayout from "../components/layouts/authPageLayout.tsx";

const Login = () => {
	return (
		<AuthPageLayout>
			<Flex
				direction="column"
				gap="3" as="div"
				className="mx-auto mt-5 md:p-4 md:mt-10 md:max-w-[555px] md:rounded-2xl md:border-2 md:border-solid
				md:border-cyan-500"
			>
				<LoginForm />
				<div className="text-center">
					Do not have an account?{" "}
					<Link to="/signup" className="text-cyan-500 hover:text-cyan-400 hover:underline">
						Sign Up!
					</Link>
				</div>
			</Flex>
		</AuthPageLayout>
	);
};

export const Route = createFileRoute('/login')({
	component: Login,
})
