import styled from "@emotion/styled";

export const Container = styled.label`
  width: 100%;
  border: 1px solid var(--line-border-color);
  padding: 0.75rem 1rem;
  border-radius: 2rem;
  display: flex;
  gap: 0.75rem;
`;

export const ClearButton = styled.button`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  background-color: transparent;
`;

export const Input = styled.input`
  width: 100%;
  outline: none;
  border: 0;
`;
