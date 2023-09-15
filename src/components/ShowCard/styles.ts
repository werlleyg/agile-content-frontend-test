import styled from "@emotion/styled";

export const Container = styled.div`
  @media screen and (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    display: flex;
  }
`;

export const DivBackground = styled.div`
  @media screen and (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--overlay-color);
    z-index: 0;
  }
`;

export const CardContent = styled.div`
  width: 370px;
  height: auto;
  border: 1px solid var(--line-border-color);
  padding: 0.75rem;
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: var(--background-color);
  z-index: 1;
  animation: fade-in var(--delay-time);
  position: sticky;
  top: 1rem;

  @media screen and (max-width: 768px) {
    width: min(100% - 2rem, 370px);
    margin: auto;
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 01;
    }
  }
`;

export const DetailImage = styled.div`
  width: 100%;
  aspect-ratio: 322/181;
  position: relative;

  img {
    width: 100%;
  }
`;

export const CurrentLink = styled.a`
  font-size: 0.75rem;
  color: var(--text-color);
`;
export const Title = styled.h4`
  font-size: 1.25rem;
  color: var(--text-color);
`;
export const P = styled.p`
  font-size: 0.875rem;
  color: var(--text-color);
`;
