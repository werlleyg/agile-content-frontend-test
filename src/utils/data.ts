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
