import { useCallback, FormEvent } from "react";
import Image from "next/image";
// styles
import { Container, Form } from "./styles";
// assets
import GoogleLogoImage from "../../../public/assets/images/google-logo.png";
// components
import { Button } from "@/components";

export function HomeSearch() {
  const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("[click search button]");
  }, []);

  return (
    <Container>
      <Image src={GoogleLogoImage} alt="Logo" />
      <Form onSubmit={handleSubmit}>
        <Button type="submit" name="search">
          Buscar
        </Button>
      </Form>
    </Container>
  );
}
