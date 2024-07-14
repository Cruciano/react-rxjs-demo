import { useEffect } from "react";
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useAuthService } from "../services/useAuthService.ts";
import HeroImage from '../assets/images/cool-cat.jpg';
import { Flex } from "@radix-ui/themes";

const HomePage = () => {
	const navigate = useNavigate();

	const { state: { user }, logOut } = useAuthService();

	useEffect(() => {
		if (!user) {
			navigate({ to: '/login' });
		}
	}, [user]);

	return (
		<div className="mt-16 md:mt-11 px-4 mb-20 md:container md:mx-auto lg:max-w-[932px]">
			<Flex direction="row" justify="between">
				<h1 className="mb-2 text-regalBlue text-2xl leading-9 font-bold md:text-3xl">
					Hello, {user?.name ? user.name : 'User'}!
				</h1>
				<button onClick={logOut} className="text-cyan-500 hover:text-cyan-400 hover:underline">
					Log out
				</button>
			</Flex>
			<img
				className="rounded-[40px] h-[225px] w-full object-cover mb-5 sm:h-[520px]"
				src={HeroImage}
				alt="Cool cat"
			/>
		</div>
	);
};

export const Route = createFileRoute('/')({
	component: HomePage
})