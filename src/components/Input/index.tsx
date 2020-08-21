import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";

const InputBlock = styled.div`
  width: 24rem;
  height: 3.875rem;
  margin-bottom: 2rem;
`;

const Label = styled.label`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: #212121;
`;

const InputField = styled.input`
  width: 100%;
  height: 2.5rem;
  border: 1px solid;
  padding: 8px;
`;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ label, name, placeholder, ...rest }) => {
  return (
    <InputBlock>
      <Label htmlFor="language">{label}</Label>
      <InputField type="text" placeholder={placeholder} {...rest} />
    </InputBlock>
  );
};

export default Input;
