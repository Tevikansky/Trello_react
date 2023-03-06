import React, { useState } from "react";
import { Input } from "./Input";
import "./Cardholder.css";

interface CardholderProps {
  title: string;
  children?: React.ReactNode;
}

function Cardholder({ title, children }: CardholderProps) {
  const [call, setCall] = useState(false);
  // const open = () => setCall(true);
  // const close = () => setCall(false);

  const [collumnTitle, setCollumnTitle] = useState(title);
  

 

  return (
    <div className="cardholder">
      {!call && (
        <h2 className="cardholder__title" 
        onClick= {setCall()=>{setCall(true)}}
        >
          {collumnTitle}
        </h2>
      )}
      {call && <Input placeholder={title} close={setCall(false)} setCollumnTitle={setCollumnTitle} />}
      <div className="cards-wrapper">{children}</div>
      <div className="create-card" onClick={() => {}}>
        + Add card
      </div>
    </div>
  );
}

export default Cardholder;
