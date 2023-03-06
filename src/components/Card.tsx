import React from "react";
import "./Card.css";


interface CardProps {
  id: number;
  title: string;
  description?: string;
}

export function Card({ title}: CardProps) {
  return (
    <div className="card">
      <div className="card-title">{title}</div>
      <div className="card-comments">comments: 1</div>
    </div>
  );
}
