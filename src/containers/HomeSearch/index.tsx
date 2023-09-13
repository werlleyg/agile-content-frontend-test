import { ReactNode } from 'react';

import { Container } from './styles';

interface HomeSearchProps {
  children: ReactNode;
}

export function HomeSearch({ children }: HomeSearchProps) {
  return (
    <Container>
      <h1>HomeSearch</h1>
      {children}
    </Container>
  );
}
