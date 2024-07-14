import { Formik, Form } from "formik";
import { SignUpRequest } from "../../core/auth/requests/signUpRequest.ts";
import { validationSchemaSignUp } from "../../shared/validationSchemas/validationSchemaSignUp.ts";
import TextInput from "../ui/formElements/TextInput.tsx";
import PasswordInput from "../ui/formElements/PasswordInput.tsx";
import Button from "../ui/button.tsx";

const initialValues: SignUpRequest = {
	name: '',
	email: '',
	password: '',
	confirmPassword: '',
};

const SignUpForm = () => {
	const onSubmit = () => {
		console.log('submit')
	}

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchemaSignUp}
			onSubmit={onSubmit}
		>
			{({ errors, touched }) => (
				<Form
					className="flex flex-col gap-4 items-center w-full mx-auto mt-4 md:mt-10"
				>
					<h1 className="text-center text-xl md:text-2xl font-bold mb-2.5">
						Sign Up
					</h1>
					<TextInput
						title="Your name"
						name="name"
						placeholder="John Deere"
						error={errors.name}
						touched={touched.name}
					/>
					<TextInput
						title="Your email"
						name="email"
						placeholder="example@gmail.com"
						error={errors.email}
						touched={touched.email}
					/>
					<PasswordInput
						title="Your password"
						name="password"
						error={errors.password}
						touched={touched.password}
					/>
					<PasswordInput
						title="Confirm password"
						name="confirmPassword"
						error={errors.confirmPassword}
						touched={touched.confirmPassword}
					/>
					<Button title="Sign Up" type="submit" />
				</Form>
			)}
		</Formik>
	);
};

export default SignUpForm;