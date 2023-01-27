import { useRef } from "react";
import Text from "../components/@elem/Text";
import Button, { ButtonImpl } from "../components/button/Button";

export default function App() {
  return (
    <>
      <Button asChild css={{}}>
        <button>버튼</button>
      </Button>
    </>
  );
}
