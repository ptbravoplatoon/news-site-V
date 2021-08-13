import React from 'react';
import { Form, Button} from 'react-bootstrap';

const LoginPage = () => {

  const handlelogin = (evt) => {
    evt.preventDefault();
    console.log(evt.target.email.value)
    console.log(evt.target.password.value)

  }

  return (
    <div>
      <h1 className='m-2'>Login Page</h1>
      <Form className='m-2' onSubmit={handlelogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control required type="email" name='email' placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Password" />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default LoginPage