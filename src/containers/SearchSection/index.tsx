import { useCallback, useState, FormEvent, ChangeEvent } from "react";
import { useRouter } from "next/router";
// styles
import { Container, Form, ImageLogo } from "./styles";
// assets
import GoogleLogoImage from "../../../public/assets/images/google-logo.png";
// components
import { Button, InputSearch } from "@/components";

export interface ISearchSection {
  inline?: boolean;
}

export function SearchSection({ inline }: ISearchSection) {
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

  return (
    <Container inline={inline}>
      <ImageLogo src={GoogleLogoImage} alt="Logo" inline={inline} />
      <Form onSubmit={handleSubmit}>
        <InputSearch
          value={searchData}
          onChange={handleInputChange}
          onClear={handleClearData}
          smallInput={inline}
        />

        {!inline && (
          <Button type="submit" name="search" disabled={!searchData}>
            Buscar
          </Button>
        )}
      </Form>
    </Container>
  );
}
