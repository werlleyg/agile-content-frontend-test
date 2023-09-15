// styles
import { Container, Content, SkeletonBar } from "./styles";

interface SkeletonCardProps {
  show: boolean;
  quantity: number;
}

export function SkeletonCard({ show, quantity }: SkeletonCardProps) {
  return (
    show && (
      <Container>
        {[...[].constructor(quantity)].map((_, idx) => (
          <Content key={idx}>
            <SkeletonBar width={"30%"} />
            <SkeletonBar width={"55%"} />
            <SkeletonBar width={"100%"} />
          </Content>
        ))}
      </Container>
    )
  );
}
