import { 
  CustomTextInput,
  Button
 } from "./components";
export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}

export  { 
  CustomTextInput,
  Button,
}