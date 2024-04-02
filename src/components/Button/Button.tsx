import { ButtonHTMLAttributes } from "react";
import { ButtonElement } from "./Button.style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;

  onClick: () => void;
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <ButtonElement
      onClick={onClick}>
      {children}
    </ButtonElement>
  );
};