import { ReactNode } from "react";

import { Container } from "./styles";

interface IRoundButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

export function RoundButton(props: IRoundButtonProps) {
  const { children }: IRoundButtonProps = props;

  return <Container {...props}>{children}</Container>;
}
