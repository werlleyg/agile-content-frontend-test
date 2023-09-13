// styles
import { Main } from "./styles";
// components
import { CustomHead } from "@/components";
// containers
import { Header } from "@/containers";

export default function Home() {
  return (
    <>
      <CustomHead />
      <Main>
        <Header />
      </Main>
    </>
  );
}
