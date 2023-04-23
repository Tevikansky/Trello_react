import React, { InputHTMLAttributes, useState } from "react";
import { Button } from "../UI/Button";
import "./Input.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputValue: string;
  close?: () => void;
  setTitle?: (string: string) => void;
}

export const Input: React.FC<InputProps> = ({
  inputValue,
  close,
  setTitle,
  ...props
}) => {
  const [value, setValue] = useState(inputValue);
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const submit = () => {
    if (value !== "") {
      setTitle?.(value);
      close?.();
    }
  };



  return (
    <div className="input-wrapper">
      <input type="text" value={value} onChange={changeHandler} {...props} />
      <Button className="btn__confirm" onClick={submit}>
        ✓
      </Button>
      <Button className="btn__cancel" onClick={close}>
        X
      </Button>
    </div>
  );
};
