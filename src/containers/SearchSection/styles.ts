import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { ISearchSection } from ".";

// types
type ICommonProps = Pick<ISearchSection, "inlineContent">;

export const Container = styled.section<ICommonProps>`
  height: 100%;
  display: flex;
  flex-direction: ${({ inlineContent }) => (inlineContent ? "row" : "column")};
  align-items: center;
  justify-content: center;
  gap: ${({ inlineContent }) => (inlineContent ? "2rem" : "1.25rem")};

  ${({ inlineContent }) =>
    inlineContent &&
    css`
      @media screen and (max-width: 512px) {
        flex-direction: column;
        width: 100%;
        align-items: flex-start;
        gap: 0.75rem;
      }
    `}
`;

export const ImageLogo = styled.div<ICommonProps>`
  width: min(
    100% - 1.25rem,
    ${({ inlineContent }) => (inlineContent ? "5.75rem" : "17rem")}
  );
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
  }
`;

export const Form = styled.form<ICommonProps>`
  display: flex;
  width: min(100% - 1.25rem, 36.375rem);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;

  ${({ inlineContent }) =>
    inlineContent &&
    css`
      @media screen and (max-width: 512px) {
        width: 100%;
      }
    `}
`;
