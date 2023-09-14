import { ChangeEvent } from "react";

export interface IInputSearchProps {
  value?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
  smallInput?: boolean;
}
