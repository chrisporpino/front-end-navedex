import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 11rem;
  height: 40px;

  background: #212121;
  text-decoration: none;
  color: #ffffff;

  font-family: Montserrat;
  font-weight: 600;
  font-size: 14px;

  cursor: pointer;
`;

interface BlackButtonProps {
  text: string;
}

const BlackButton: React.FC<BlackButtonProps> = ({ text }) => {
  return (
    <div>
      <Button type="submit">{text}</Button>
    </div>
  );
};

export default BlackButton;
