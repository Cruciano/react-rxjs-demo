import { createFileRoute, Link } from '@tanstack/react-router';
import SignUpForm from "../components/forms/signUpForm.tsx";
import { Flex } from "@radix-ui/themes";

const SignUp = () => {
	return (
		<Flex
			direction="column"
			gap="3" as="div"
			className="mx-auto mt-5 md:p-4 md:mt-10 md:max-w-[555px] md:rounded-2xl md:border-2 md:border-solid
			md:border-cyan-500"
		>
			<SignUpForm />
			<div className="text-center">
				Already have an account?{" "}
				<Link to="/login" className="text-cyan-500 hover:text-cyan-400 hover:underline">
					Log in!
				</Link>
			</div>
		</Flex>
	);
};

export const Route = createFileRoute('/signup')({
  component: SignUp,
})