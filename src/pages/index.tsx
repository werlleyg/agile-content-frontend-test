// styles
import { Main } from "./styles";
// components
import { CustomHead } from "@/components";
// containers
import { Footer, Header, SearchSection } from "@/containers";

export default function Home() {
  return (
    <>
      <CustomHead />
      <Header />
      <Main>
        <SearchSection />
      </Main>
      <Footer />
    </>
  );
}
