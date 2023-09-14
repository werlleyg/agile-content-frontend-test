import Image from "next/image";
// components
import { RoundButton } from "@/components";
// styles
import { B, Container, DivOptions } from "./styles";
// assets
import AppsIcon from "../../../public/assets/icons/apps.svg";
import ProfileImage from "../../../public/assets/images/profile.png";
import { SearchSection } from "@/containers";

interface IResultsHeaderProps {
  value?: string;
}

export function ResultsHeader({ value = "" }: IResultsHeaderProps) {
  return (
    <Container>
      <SearchSection inlineContent value={value} />
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
