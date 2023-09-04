import React, { useState } from "react";
import { Modal } from "../UI/Modal";
import "./Card.css";



export interface CardProps {
  id: number;
  title: string;
  removeCard?: () => void;
  modal?: () => void;
  onClick: () => void;
}

export function Card({ id, title, removeCard, onClick}: CardProps) {


  return (
    <>
      <div className="card">
        <div className="card-title" onClick={onClick}>{title}</div>
        <div className="card-comments">comments: 1</div>
        <div className="card-delete" onClick={removeCard}>
          Delete
        </div>
      </div>
    </>
  );
}
