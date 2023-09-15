import Image from "next/image";
import {
  useCallback,
  useState,
  useEffect,
  FormEvent,
  ChangeEvent,
} from "react";
import { useRouter } from "next/router";
// styles
import { Container, Form, ImageLogo } from "./styles";
// assets
import GoogleLogoImage from "../../../public/assets/images/google-logo.png";
// components
import { Button, InputSearch } from "@/components";

export interface ISearchSection {
  inlineContent?: boolean;
  value?: string;
}

export function SearchSection({ inlineContent, value }: ISearchSection) {
  const router = useRouter();
  const [searchData, setSearchData] = useState<string>();

  // handle submit form
  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const pushValue: string = `/results?search=${searchData}`;
      router.push(pushValue);
    },
    [searchData, router],
  );

  // handle input change
  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setSearchData(value);
    },
    [],
  );

  // clear search data
  const handleClearData = useCallback(() => {
    setSearchData("");
  }, []);

  // Set default value in search data
  useEffect(() => {
    setSearchData(value);
  }, [value]);

  return (
    <Container inlineContent={inlineContent}>
      <ImageLogo inlineContent={inlineContent}>
        <Image src={GoogleLogoImage} alt="Logo" />
      </ImageLogo>
      <Form onSubmit={handleSubmit} inlineContent={inlineContent}>
        <InputSearch
          value={searchData}
          onChange={handleInputChange}
          onClear={handleClearData}
          smallInput={!!inlineContent}
        />

        {!inlineContent && (
          <Button type="submit" name="search" disabled={!searchData}>
            Buscar
          </Button>
        )}
      </Form>
    </Container>
  );
}
