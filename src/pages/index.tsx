// styles
import { Main } from "./styles";
// components
import { CustomHead } from "@/components";
// containers
import { Footer, Header, HomeSearch } from "@/containers";

export default function Home() {
  return (
    <>
      <CustomHead />
      <Header />
      <Main>
        <HomeSearch />
      </Main>
      <Footer />
    </>
  );
}
