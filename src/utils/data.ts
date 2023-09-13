// types
import { IResponseData } from "@/dtos/search";
// faker.js
import { faker } from "@faker-js/faker";

const getImage = () => faker.image.animals(644, 362, true);
const getType = () => faker.animal.type();
const getUrl = () => faker.internet.url();
const getText = () => faker.lorem.sentences();
// @ts-ignore
const getTitle = (type: string) => faker?.animal[type]();

/**
 * The "data" constant contains an array of objects with fake data.
 * Each object contains information such as type, id, url, title, description, and image.
 * It is used to simulate a dataset obtained in a query.
 *  @type {IResponseData[]} - An array of objects of type `IResponseData`.
 */
export const data: IResponseData[] = [...[].constructor(100)].map(
  (_, index) => {
    const type = getType();

    return {
      type,
      id: index + 1,
      url: getUrl(),
      title: getTitle(type),
      description: getText(),
      image: getImage(),
    };
  },
);
