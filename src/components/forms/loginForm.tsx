import { Formik, Form } from "formik";
import { LoginFormData } from "../../types/formData/loginFormData.ts";
import { validationSchemaLogin } from "../../shared/validationSchemas/validationSchemaLogin.ts";
import TextInput from "../ui/formElements/TextInput.tsx";
import PasswordInput from "../ui/formElements/PasswordInput.tsx";
import Button from "../ui/button.tsx";

const initialValues: LoginFormData = {
	email: '',
	password: '',
};

const LoginForm = () => {
	const onSubmit = () => {
		console.log('submit')
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
					<Button title="Log in" type="submit" />
				</Form>
			)}
		</Formik>
	);
};

export default LoginForm;