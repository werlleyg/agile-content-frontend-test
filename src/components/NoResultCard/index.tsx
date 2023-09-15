import { ReactNode } from "react";

import { Container, P } from "./styles";

interface NoResultCardProps {
  show: boolean;
  emptyResult: boolean;
  value?: string;
}

export function NoResultCard({ show, emptyResult, value }: NoResultCardProps) {
  return (
    show && (
      <Container>
        {emptyResult && (
          <P>
            No results found for <b>&apos;{value}&apos;</b>
          </P>
        )}
        <P>
          Try looking for:{" "}
          <b>
            insect, fish, horse, crocodilia, bear, cetacean, cow, lion, rabbit,
            cat, snake, dog, bird.
          </b>
        </P>
      </Container>
    )
  );
}
