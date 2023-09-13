import styled from "@emotion/styled";

export const Container = styled.button`
  background-color: transparent;
  border: 0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.2rem;

  cursor: pointer;

  :hover {
    background: var(--gray-color-200);
  }
`;
