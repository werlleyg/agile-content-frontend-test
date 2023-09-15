import Image from "next/image";
// styles
import {
  CardContent,
  Container,
  CurrentLink,
  DetailImage,
  DivBackground,
  P,
  Title,
} from "./styles";
// types
import { IResponseData } from "@/dtos/search";

interface ShowCardProps {
  show: boolean;
  dataShow?: IResponseData;
  onClose: () => void;
}

export function ShowCard({ show, dataShow, onClose }: ShowCardProps) {
  return (
    show &&
    dataShow && (
      <Container>
        <DivBackground onClick={onClose} />
        <CardContent>
          <DetailImage>
            <Image
              src={dataShow?.image}
              fill
              alt={dataShow.title}
              sizes="100%"
            />
          </DetailImage>
          <CurrentLink href={dataShow.url} target="_blank">
            {dataShow.url}
          </CurrentLink>
          <Title>{dataShow.title}</Title>
          <P>{dataShow.description}</P>
        </CardContent>
      </Container>
    )
  );
}
