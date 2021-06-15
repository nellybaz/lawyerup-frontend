import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  min-height: 80px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: #eaf1e3;
`;

export const Icon = styled(Link)`
  margin-top: 90px;
  margin-bottom: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #0b572c;
  font-weight: bold;
  font-size: 25px;
  &:hover {
    color: #0b572c;
    cursor: pointer;
    font-size: 25.1px;
    text-decoration: none;
  }
  @media screen and (max-width: 480px) {
    margin-top: 8px;
  }
`;

export const FormWrap = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  background: #fff;
  max-width: 500px;
  height: 100%;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  margin-bottom: 10px;
  padding: 15px 32px;
  border-radius: 25px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  @media screen and (max-width: 200px) {
    padding: 32px 32px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 10px;
  color: #2d2e2c;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 2px;
  font-size: 15px;
  color: #2d2e2c;
  font-weight: bold;
`;

export const FormInput = styled.input`
  padding: 5px 5px;
  margin-bottom: 15px;
  border: 1px solid #88b04b;
  border-radius: 5px;
  border-bottom-left-radius: 0;
  border-top-right-radius: 0;
`;

export const FormButton = styled.button`
  background: #90ce58;
  padding: 10px 0;
  margin-bottom: 5px;
  border: none;
  border-radius: 10px;
  border-bottom-left-radius: 0;
  border-top-right-radius: 0;
  color: #f9f9f9;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: #7fb053;
  }
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 2px;
  color: #2d2e2c;
  font-size: 14px;
  font-weight: 550;
`;
