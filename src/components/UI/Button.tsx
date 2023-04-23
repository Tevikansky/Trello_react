import React, { ButtonHTMLAttributes} from "react";
import "./Button.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {

}

export const Button: React.FC<ButtonProps> = ({ children, ...props}) => {

  return <button  {...props}>
    {children}
  </button>;
};
