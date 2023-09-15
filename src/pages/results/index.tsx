import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";

import { Deck, Main } from "./styles";
// components
import {
  Card,
  CustomHead,
  NoResultCard,
  ShowCard,
  SkeletonCard,
} from "@/components";
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
  const [selectedDataShow, setSelectedDataShow] = useState<
    IResponseData | undefined
  >();
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

  // handle selected show card
  const handleSelectedShowCard = useCallback((selectedData: IResponseData) => {
    setSelectedDataShow(selectedData);
  }, []);

  // handle close show card
  const handleCloseShowCard = useCallback(() => {
    setSelectedDataShow(undefined);
  }, []);

  // Get search response
  const getSearchResponse = useCallback(async () => {
    if (!searchData) return setSearchResult([]);
    // set show loading
    showLoading();
    // Fetch search results based in searchData value
    const results: IResponseData[] = await getSearchResult(searchData);
    // Update the searchResult
    setSearchResult(results);
    // clear selected result card
    handleCloseShowCard();
    // set hide loading
    hideLoading();
  }, [searchData, showLoading, hideLoading, handleCloseShowCard]);

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
        {!loading && (
          <Deck>
            {searchResult?.map((result) => (
              <Card
                dataResult={result}
                key={result.id}
                onSelected={handleSelectedShowCard}
              />
            ))}
            <NoResultCard
              show={searchResult?.length === 0 || !searchData}
              emptyResult={searchResult?.length === 0 && !!searchData}
              value={searchData}
            />
          </Deck>
        )}
        <SkeletonCard show={loading} quantity={3} />
        <ShowCard
          show={!!selectedDataShow && !loading && searchResult?.length !== 0}
          dataShow={selectedDataShow}
          onClose={handleCloseShowCard}
        />
      </Main>
      <Footer />
    </>
  );
}
