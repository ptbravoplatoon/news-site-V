import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const loginObject = {};
    [...e.target]
      .filter((item) => item.name)
      .forEach((item) => {
        loginObject[item.name] = item.value;
      });
    console.log(loginObject);
  };

  const handleInputChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    switch (inputName) {
      case "email":
        setEmail(inputValue);
        break;
      case "password":
        setPassword(inputValue);
        break;
    }
  };

  return (
    <Form className="article-form" onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={handleInputChange}
        />
      </FormGroup>
      <Button color="primary">Login</Button>
    </Form>
  );
};

export default LoginPage;
