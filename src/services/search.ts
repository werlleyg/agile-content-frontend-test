// types
import { IResponseData } from "@/dtos/search";
// services
import { API } from "./api";

/**
 * Function to fetch search results from the API.
 *
 * This function sends a GET request to the API with a specific search value and returns the results.
 *
 * @param {string} value - The search value to be sent to the API.
 * @returns {Promise<IResponseData[]>} A promise that resolves to an array of response data.
 *
 * @throws {Error} Throws an error in case there is an error in fetching search results from the API.
 *
 * @example
 * const searchValue = 'example';
 * const searchResults = await getSearchResult(searchValue);
 * console.log(searchResults);
 */

export async function getSearchResult(value: string): Promise<IResponseData[]> {
  try {
    const endpoint: string = `/search?value=${value}`;
    const response: IResponseData[] = await API.get(endpoint).then(
      (res) => res.data,
    );

    return response;
  } catch (error) {
    throw new Error("Error in fetching search results");
  }
}
