// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
// util
import { data } from "@/utils";
// types
import { IResponseData } from "@/dtos/search";
interface IQuery {
  value?: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // If the method is not GET, returns
  if (req.method !== "GET") return res.status(400).json({});

  const { value }: IQuery = req.query;

  // If value does not exist, returns empty array
  if (!value) return res.status(200).json([]);

  const response: IResponseData[] = data.filter(
    (animal) =>
      findValueInText(value, animal.title) ||
      findValueInText(value, animal.type),
  );

  res.status(200).json(response);
}

function findValueInText(value: string, text: string): boolean {
  return text.toLowerCase().indexOf(value.toLowerCase()) !== -1;
}
