import React, { useState } from "react";
import Button from "../Button";
import Form from "../Form";
import Whitebox from "../Whitebox";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { email, password };
    onLogin(userData);
  };

  return (
    <div>
      <h2>Login</h2>
      <Whitebox>
        <Form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            placeholder="E-mail Address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <Button type="submit">Login</Button>
        </Form>
      </Whitebox>
    </div>
  );
};

export default Login;
