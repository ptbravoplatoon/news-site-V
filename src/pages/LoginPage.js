import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

function LoginPage() {
	const handleLogin = (e) => {
		e.preventDefault();
		console.log(`Email: ${e.target.elements[0].value}\nPassword: ${e.target.elements[1].value}`);
	};

	return (
		<Form onSubmit={handleLogin}>
			<FormGroup>
				<Label for="userEmail">Email</Label>
				<Input type="email" name="email" id="userEmail" />
			</FormGroup>
			<FormGroup>
				<Label for="userPassword">Password</Label>
				<Input type="password" name="password" id="userPassword" />
			</FormGroup>
			<Button>Submit</Button>
		</Form>
	);
}

export default LoginPage;
