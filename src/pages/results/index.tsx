import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";

import { Deck, Main } from "./styles";
// components
import { Card, CustomHead } from "@/components";
// containers
import { Footer, ResultsHeader } from "@/containers";

// types
import { IResponseData } from "@/dtos/search";

export default function Results() {
  const router = useRouter();
  const { search } = router.query;

  const [searchData, setSearchData] = useState<string>();
  const [searchResult, setSearchResult] = useState<IResponseData[]>([
    {
      type: "crocodilia",
      id: 48,
      url: "https://infatuated-artichoke.info/",
      title: "Chinese Alligator",
      description:
        "Praesentium repellendus neque eaque. At animi eveniet vitae cumque cumque reprehenderit. Sed reprehenderit vero quibusdam in numquam. Repudiandae natus voluptatem alias quos exercitationem reprehenderit nulla est.Praesentium repellendus neque eaque. At animi eveniet vitae cumque cumque reprehenderit. Sed reprehenderit vero quibusdam in numquam. Repudiandae natus voluptatem alias quos exercitationem reprehenderit nulla est.",
      image: "https://loremflickr.com/644/362/animals?lock=610250119970816",
    },
  ]);

  // Set first access value
  const setFirstAccessValue = useCallback(() => {
    setSearchData(search as string);
  }, [search]);

  useEffect(() => {
    setFirstAccessValue();
  }, [setFirstAccessValue]);

  return (
    <>
      <CustomHead title={searchData} />
      <ResultsHeader value={searchData} />
      <Main>
        <Deck>
          {searchResult.map((result) => (
            <Card dataResult={result} key={result.id} />
          ))}
        </Deck>
      </Main>
      <Footer />
    </>
  );
}
