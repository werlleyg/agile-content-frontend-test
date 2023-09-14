import Image from "next/image";
// styles
import { ClearButton, Container, Input } from "./styles";
// assets
import SearchIcon from "../../../public/assets/icons/search.svg";
import CloseIcon from "../../../public/assets/icons/close.svg";
// types
import { InputSearchProps } from "@/dtos/input";

export function InputSearch({
  value = "",
  onChange,
  onClear,
}: InputSearchProps) {
  return (
    <Container>
      <Image src={SearchIcon} alt="search icon" id="search-icon" />
      <Input onChange={onChange} value={value} />
      {value && (
        <ClearButton type="reset" onClick={onClear}>
          <Image src={CloseIcon} alt="search icon" />
        </ClearButton>
      )}
    </Container>
  );
}
