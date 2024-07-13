import { createFileRoute } from '@tanstack/react-router'
import HeroImage from '../assets/images/cool-cat.jpg';

const HomePage = () => {
	return (
		<div className="mt-16 md:mt-11 px-4 mb-20 md:container md:mx-auto lg:max-w-[932px]">
			<h1 className="mb-2 text-regalBlue text-2xl leading-9 font-bold md:text-3xl">
				Hello, user!
			</h1>
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