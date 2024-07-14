import { Formik, Form } from "formik";
import { Login } from "../../types/auth/login.ts";
import { validationSchemaLogin } from "../../shared/validationSchemas/validationSchemaLogin.ts";
import TextInput from "../ui/formElements/TextInput.tsx";
import PasswordInput from "../ui/formElements/PasswordInput.tsx";
import Button from "../ui/button.tsx";
import { useAuthService } from "../../core/services/useAuthService.ts";
import { Spinner } from "@radix-ui/themes";

const initialValues: Login = {
	email: '',
	password: '',
};

const LoginForm = () => {
	const { login, state } = useAuthService();
	const { isLoading, error: loginError } = state;

	const onSubmit = (values: Login) => {
		login(values);
	}

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchemaLogin}
			onSubmit={onSubmit}
		>
			{({ errors, touched }) => (
				<Form className="flex flex-col gap-4 items-center w-full mx-auto mt-4 md:mt-10">
					<h1 className="text-center text-xl md:text-2xl font-bold mb-2.5">
						Log in
					</h1>
					{loginError && (
						<p className="text-rose-500">
							{loginError}
						</p>
					)}
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
					<div className="relative">
						<Button title="Log in" type="submit" />
						{isLoading && (
							<div className="absolute top-4 -right-8">
								<Spinner size="3" />
							</div>
						)}
					</div>
				</Form>
			)}
		</Formik>
	);
};

export default LoginForm;