import React from "react";
import styled from "styled-components";
import DeletePerson from "../DeletePerson";

const Root = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, .8);
`;

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => isOpen ? (
    <Root>
      {children}
    </Root>
  ) : null;

export default Modal;
