import React, { useState } from "react";
import { Input } from "../Input/Input";
import { CardholderProps } from "./Cardholder";




export function CardholderTitle({ title }: CardholderProps) {
  const [collumnTitle, setCollumnTitle] = useState<string>(title);
  const [call, setCall] = useState<boolean>(false);

  const calToggle = () => setCall(!call);

  return (
    <>
      {!call && (
        <h2 className="cardholder__title" onClick={calToggle}>
          {collumnTitle}
        </h2>
      )}
      {call && (
        <Input
          inputValue={collumnTitle}
          close={calToggle}
          setTitle={setCollumnTitle}
          placeholder="Enter name:"
          about="123"
        />
      )}
    </>
  );
}
