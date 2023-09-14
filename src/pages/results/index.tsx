import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";

import { Main } from "./styles";
// components
import { CustomHead } from "@/components";
// containers
import { Footer } from "@/containers";

export default function Results() {
  const router = useRouter();
  const { search } = router.query;

  const [searchData, setSearchData] = useState<string>();


  return (
    <>
      <CustomHead />
      {/* <Header /> */}
      <Main></Main>
      <Footer />
    </>
  );
}
