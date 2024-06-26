import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
}

export const ButtonElement = styled.button<ButtonProps>`
  padding: 10px 30px;
  border: 0;
  font-size: clamp(10px, 1vw, 22px);;
  font-weight: 600;
  border-radius: 5px;
  background-color: ${colors.button.main};
  color: ${colors.button.main};
  cursor: pointer;
  &:hover {
    background-color: ${colors.button.hover};
  }
`;
