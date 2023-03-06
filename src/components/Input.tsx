import React, { useState } from "react";


import "./Input.css";

interface InputProps {
  placeholder: string;
  close?: () => void;
  setCollumnTitle?: (string: string) => void;
}

export function Input({ placeholder, close, setCollumnTitle }: InputProps) {
  const [value, setValue] = useState("");
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setCollumnTitle?.(value); 

  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={changeHandler}
      />
      <button className="btn__confirm" type="submit">
        ✓
      </button>
      <div className="btn__cancel" onClick={close}>
        X
      </div>
    </form>
  );
}
