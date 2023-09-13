// styles
import { Container } from "./styles";
// types
import { IButtonProps } from "@/dtos/button";

export function Button(props: IButtonProps) {
  const { children }: IButtonProps = props;

  return <Container {...props}>{children}</Container>;
}
