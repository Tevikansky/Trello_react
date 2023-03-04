import React from "react";
import "./Cardholder.css";

interface CardholderProps {
  title: string;
  children?: React.ReactNode;
}

function Cardholder({ title, children }: CardholderProps) {
  return (
    <div className="cardholder">
      <h2 className="cardholder__title">{title}</h2>
      <div className="cards-wrapper">{children}</div>
      <div className="create-card"> + Add card </div>
    </div>
  );
}

export default Cardholder;
