import React from "react";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormButton,
  FormH1,
  FormInput,
  FormLabel,
  Text,
} from "./LoginElements";

const Login = () => {
  return (
      <Container>
        <FormWrap>
          <Icon to="/">Lawyer Up</Icon>
          <FormContent>
            <Form onSubmit="">
              <FormH1>Log in</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required />
              <Text>
                <a
                  href="/forgot-password"
                  style={{ textDecoration: "none", color: "#2d2e2c" }}
                >
                  Forgot password?
                </a>
              </Text>
              <FormButton type="submit">Continue</FormButton>
            </Form>
            <Text>
              <a
                href="/signup"
                style={{ textDecoration: "none", color: "#2d2e2c" }}
              >
                New User? Sign up
              </a>
            </Text>
          </FormContent>
        </FormWrap>
      </Container>
  );
};

export default Login;
