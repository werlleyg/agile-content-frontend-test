// styles
import { Container, SkeletonBar } from "./styles";

interface SkeletonCardProps {
  show: boolean;
  quantity: number;
}

export function SkeletonCard({ show, quantity }: SkeletonCardProps) {
  return (
    show &&
    [...[].constructor(quantity)].map((_, idx) => (
      <Container key={idx}>
        <SkeletonBar width={"30%"} />
        <SkeletonBar width={"55%"} />
        <SkeletonBar width={"100%"} />
      </Container>
    ))
  );
}
