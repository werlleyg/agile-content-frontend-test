import styled from "@emotion/styled";
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

export const Form = styled.form`
  display: flex;
  width: min(100% - 1.25rem, 36.375rem);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
`;
