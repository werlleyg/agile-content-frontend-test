// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
// util
import { data, findValueInText } from "@/utils";
// types
import { IResponseData } from "@/dtos/search";
interface IQuery {
  value?: string;
}

/**
 * This function handles HTTP GET requests to fetch and filter data based on a query value.
 * @param {NextApiRequest} req - The HTTP request object.
 * @param {NextApiResponse} res - The HTTP response object.
 */

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // If the method is not GET, returns
  if (req.method !== "GET") return res.status(405).json({});

  const { value }: IQuery = req.query;

  // If value does not exist, returns empty array
  if (!value) return res.status(200).json([]);

  const response: IResponseData[] = data.filter(
    (animal) =>
      findValueInText(value, animal.title) ||
      findValueInText(value, animal.type),
  );

  // Return response with filtered data
  res.status(200).json(response);
}
