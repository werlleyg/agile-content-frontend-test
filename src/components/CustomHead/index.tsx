import Head from "next/head";
// types
import { ICustomHeadProps, IHeadData } from "@/dtos/head";

export function CustomHead({ title }: ICustomHeadProps) {
  const headData: IHeadData = {
    title: "Agile Content",
    description: "Do your research quickly and easily",
    icon: "/favicon.ico",
  };

  return (
    <Head>
      <title>
        {title ? `${title} - Search ${headData.title}` : headData.title}
      </title>
      <meta name="description" content={headData.description} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, user-scalable=no"
      />
      <link rel="icon" href={headData.icon} />
    </Head>
  );
}
