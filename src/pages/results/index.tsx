import { ReactNode } from "react";

import { Main } from "./styles";
// components
import { CustomHead } from "@/components";
// containers
import { Footer } from "@/containers";

interface ResultsProps {
  children: ReactNode;
}

export default function Results({ children }: ResultsProps) {
  return (
    <>
      <CustomHead />
      {/* <Header /> */}
      <Main></Main>
      <Footer />
    </>
  );
}
