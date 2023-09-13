import styled from "@emotion/styled";

export const Container = styled.button`
  background-color: var(--filled-background-color);
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border: 1px solid var(--filled-background-color);

  :hover {
    box-shadow: 0px 2px 5px rgba(var(--black-color-rgb), 0.2);
    border: 1px solid var(--line-border-color);
  }
`;
