import React from "react";
import "./User.css";
import { Button } from "../UI/Button";

interface UserProps {
  title: string;
  changeUser: () => void
}

export default function User({ title, changeUser }: UserProps) {
  return (
    <>
      <div className="user__block"><h3>Hello, {title}!</h3>
      <Button onClick={changeUser}>Change user</Button></div>
    </>
  );
}
