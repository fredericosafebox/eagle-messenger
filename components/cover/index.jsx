import { Wrapper } from "./styles";
import Image from "next/image";
import eagle from "../../public/eagle.svg";

function Cover() {
  return (
    <Wrapper>
      <Image src={eagle} alt="Eagle logo" width="300px" height="300px" />
    </Wrapper>
  );
}

export default Cover;
