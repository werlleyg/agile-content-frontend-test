import styled from "@emotion/styled";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0.75rem 1rem;
  border-bottom: 1px solid var(--line-border-color);
`;
export const DivTitle = styled.p`
  font-size: 0.875rem;
  color: var(--text-color);
`;
export const DivOptions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  img[title="profile"] {
    width: 2rem;
    height: auto;
    aspect-ratio: 1/1;
    border-radius: 50%;

    :hover {
      background: var(--gray-color-200);
    }
  }
`;

export const B = styled.b`
  font-weight: bold;
`;
