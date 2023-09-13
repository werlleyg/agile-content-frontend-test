import { ReactNode } from "react";

export interface IRoundButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

export interface IButtonProps {
  children: ReactNode;
  onClick?: () => void;

  type: "button" | "submit" | "reset";
  name?: string;
  disabled?: boolean;
}
