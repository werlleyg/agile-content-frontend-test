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

  // Set first access value
  const setFirstAccessValue = useCallback(() => {
    if (search) setSearchData(search as string);
  }, [search]);

  useEffect(() => {
    setFirstAccessValue();
  }, [setFirstAccessValue]);

  return (
    <>
      <CustomHead />
      {/* <Header /> */}testes
      <Main></Main>
      <Footer />
    </>
  );
}
