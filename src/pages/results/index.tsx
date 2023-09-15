import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";

import { Deck, Main } from "./styles";
// components
import { Card, CustomHead } from "@/components";
// containers
import { Footer, ResultsHeader } from "@/containers";

// types
import { IResponseData } from "@/dtos/search";
// services
import { getSearchResult } from "@/services/search";

export default function Results() {
  const router = useRouter();
  const { search } = router.query;

  const [searchData, setSearchData] = useState<string>();
  const [searchResult, setSearchResult] = useState<IResponseData[]>();
  const [loading, setLoading] = useState<boolean>(false);

  // show loading
  const showLoading = useCallback(() => {
    setLoading(true);
  }, []);
  // hide loading
  const hideLoading = useCallback(() => {
    setLoading(false);
  }, []);

  // Set first access value
  const setFirstAccessValue = useCallback(() => {
    setSearchData(search as string);
  }, [search]);

  // Get search response
  const getSearchResponse = useCallback(async () => {
    if (!searchData) return;
    // set show loading
    showLoading();
    // Fetch search results based in searchData value
    const results: IResponseData[] = await getSearchResult(searchData);
    // Update the searchResult
    setSearchResult(results);
    // set hide loading
    hideLoading();
  }, [searchData, showLoading, hideLoading]);

  useEffect(() => {
    setFirstAccessValue();
  }, [setFirstAccessValue]);

  useEffect(() => {
    getSearchResponse();
  }, [getSearchResponse]);

  return (
    <>
      <CustomHead title={searchData} />
      <ResultsHeader value={searchData} />
      <Main>
        <Deck>
          {searchResult?.map((result) => (
            <Card dataResult={result} key={result.id} />
          ))}
        </Deck>
      </Main>
      <Footer />
    </>
  );
}
