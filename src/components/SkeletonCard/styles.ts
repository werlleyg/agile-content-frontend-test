import styled from "@emotion/styled";

// types

interface ISkeletonBar {
  width: string;
}

export const Container = styled.div`
  width: min(100%, 40.75rem);
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const SkeletonBar = styled.div<ISkeletonBar>`
  background-color: var(--skeleton-color);
  height: 1.25rem;
  width: ${({ width }) => width};

  animation: fade-in-out 1s ease-out infinite alternate;

  @keyframes fade-in-out {
    0% {
      opacity: 0.1;
    }
    100% {
      opacity: 1;
    }
  }
`;
