import styled from "@emotion/styled";

export const Container = styled.div`
  width: min(100%, 40.75rem);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.25rem;
`;

export const CurrentLink = styled.a`
  font-size: 0.75rem;
  color: var(--text-color);
`;
export const TitleLink = styled.a`
  font-size: 1.25rem;
  color: var(--link-color);
`;
export const P = styled.p`
  font-size: 0.875rem;
  color: var(--text-color);

  /* limit text to 3 lines */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
