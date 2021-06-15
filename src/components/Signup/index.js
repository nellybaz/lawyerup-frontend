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
} from "./SignupElements";

const Signup = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Lawyer Up</Icon>
          <FormContent>
            <Form onSubmit="">
              <FormH1>Create Account</FormH1>
              <FormLabel htmlFor="for">Full Name</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required />
              <FormButton type="submit">Sign Up</FormButton>
            </Form>
            <Text>
              <a href="/" style={{ textDecoration: "none", color: "#2d2e2c" }}>
                Already have an account? Login
              </a>
            </Text>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Signup;
