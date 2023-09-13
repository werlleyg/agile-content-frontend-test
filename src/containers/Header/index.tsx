import Image from "next/image";
// components
import { RoundButton } from "@/components";
// styles
import { B, Container, DivOptions, DivTitle } from "./styles";
// assets
import AppsIcon from "../../../public/assets/icons/apps.svg";
import ProfileImage from "../../../public/assets/images/profile.png";

export function Header() {
  return (
    <Container>
      <DivTitle>
        <B>Agile Content</B> Frontend test
      </DivTitle>
      <DivOptions>
        <RoundButton>
          <Image src={AppsIcon} alt={"Apps Icon"} />
        </RoundButton>
        <RoundButton>
          <Image src={ProfileImage} alt={"Profile Image"} title="profile" />
        </RoundButton>
      </DivOptions>
    </Container>
  );
}
