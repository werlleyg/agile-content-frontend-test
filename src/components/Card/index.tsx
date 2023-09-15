// styles
import { Container, CurrentLink, P, TitleLink } from "./styles";
// types
import { IResponseData } from "@/dtos/search";

interface ICardProps {
  dataResult: IResponseData;
}

export function Card({ dataResult }: ICardProps) {
  return (
    <Container>
      <CurrentLink>{dataResult.url}</CurrentLink>
      <TitleLink>{dataResult.title}</TitleLink>
      <P>{dataResult.description}</P>
    </Container>
  );
}
