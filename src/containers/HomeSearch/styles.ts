import styled from "@emotion/styled";
import Image from "next/image";

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
`;

export const ImageLogo = styled(Image)`
  width: min(100% - 1.25rem, 17rem);
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
