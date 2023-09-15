// styles
import { Container, CurrentLink, P, TitleLink } from "./styles";
// types
import { IResponseData } from "@/dtos/search";

interface ICardProps {
  dataResult: IResponseData;
  onSelected: (e: IResponseData) => void;
}

export function Card({ dataResult, onSelected }: ICardProps) {
  return (
    <Container>
      <CurrentLink>{dataResult.url}</CurrentLink>
      <TitleLink onClick={() => onSelected(dataResult)}>
        {dataResult.title}
      </TitleLink>
      <P>{dataResult.description}</P>
    </Container>
  );
}
