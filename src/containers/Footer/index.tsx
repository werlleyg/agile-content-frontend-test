// types
import { IFooterData } from "@/dtos/footer";
// styles
import { Container, P } from "./styles";

export function Footer() {
  const footerData: IFooterData = {
    description: "Google 2021",
    version: "0.1.0",
  };

  return (
    <Container>
      <P>&copy; {footerData.description}</P>
      <P>Version: {footerData.version}</P>
    </Container>
  );
}
