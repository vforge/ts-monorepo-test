import React from "react";
import styled from "styled-components";
import { trackEvent } from "@vforge/tracking";

type ButtonProps = {
  label: string;
  onClick?: (e: React.MouseEvent) => void;
};

const ButtonStyled = styled.button`
  background-color: inherit;
  border: 0;
  color: inherit;
  font: inherit;
`;

function Button({label, onClick}: ButtonProps) {
  React.useEffect(() => {
    trackEvent({
      action: 'Button initialized',
    });
  }, []);

  return <ButtonStyled onClick={onClick}>{label}</ButtonStyled>;
}

export default Button;
