import Image from "next/image";
// styles
import { Container } from "./styles";
// assets
import GoogleLogoImage from "../../../public/assets/images/google-logo.png";

export function HomeSearch() {
  return (
    <Container>
      <Image src={GoogleLogoImage} alt="Logo" />
    </Container>
  );
}
