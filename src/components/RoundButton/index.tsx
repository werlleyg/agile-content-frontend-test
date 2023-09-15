// styles
import { Container } from "./styles";
// types
import { IRoundButtonProps } from "@/dtos/button";

export function RoundButton(props: IRoundButtonProps) {
  const { children }: IRoundButtonProps = props;

  return <Container {...props}>{children}</Container>;
}
