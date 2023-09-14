import styled from "@emotion/styled";
import Image from "next/image";
import { ISearchSection } from ".";

// types
type ICommonProps = Pick<ISearchSection, "inline">;

export const Container = styled.section<ICommonProps>`
  height: 100%;
  display: flex;
  flex-direction: ${({ inline }) => (inline ? "row" : "column")};
  align-items: center;
  justify-content: center;
  gap: ${({ inline }) => (inline ? "2rem" : "1.25rem")};
`;

export const ImageLogo = styled(Image)<ICommonProps>`
  width: min(100% - 1.25rem, ${({ inline }) => (inline ? "5.75rem" : "17rem")});
  height: auto;
`;

export const Form = styled.form`
  display: flex;
  width: min(100% - 1.25rem, 36.375rem);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
`;
