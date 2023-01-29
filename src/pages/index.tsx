import { useRef } from "react";
import Text from "../components/@elem/Text";

import * as Combobox from "../components/combobox/Combobox";
import { styled } from "../styles/stitches.conf";

const people = [
  { id: 1, name: "Durward Reynolds", unavailable: false },
  { id: 2, name: "Kenton Towne", unavailable: false },
  { id: 3, name: "Therese Wunsch", unavailable: false },
  { id: 4, name: "Benedict Kessler", unavailable: true },
  { id: 5, name: "Katelyn Rohan", unavailable: false },
];

export default function App() {
  return (
    <>
      <Combobox.Root defaultValue={people[0].name}>
        <StyledButton>드롭다운</StyledButton>
        <StyleContents>
          {people.map((p) => (
            <StyledItem key={p.id} value={p.name}>
              {p.name}
            </StyledItem>
          ))}
        </StyleContents>
      </Combobox.Root>
    </>
  );
}

const StyledButton = styled(Combobox.Trigger, {
  all: "unset",
  border: "1px solid #ddd",
  width: 230,
  height: 46,
  px: 20,
  boxSizing: "border-box",
});

const StyleContents = styled(Combobox.Contents, {
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  width: 300,
});

const StyledItem = styled(Combobox.Item, {
  boxSizing: "border-box",
  // flexGrow: 0,
  // all: "unset",
  height: 30,
  backgroundColor: "#fff",
  padding: 0,
  width: "100%",
  border: "1px solid #ddd",
});
