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
} from "./ForgotPasswordElements";

const ForgotPassword = () => {
  return (
      <Container>
        <FormWrap>
          <Icon to="/">Lawyer Up</Icon>
          <FormContent>
            <Form onSubmit="">
              <FormH1>Password Reset</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormButton type="submit">Reset</FormButton>
            </Form>
            <Text>
              <a href="/" style={{ textDecoration: "none", color: "#2d2e2c" }}>
                Back to Login
              </a>
            </Text>
          </FormContent>
        </FormWrap>
      </Container>
  );
};

export default ForgotPassword;
