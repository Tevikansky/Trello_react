import { createContext } from "react";


interface IInputContext {
  call:boolean;
}

export const InputContext = createContext<IInputContext> ({
  call: false,
});