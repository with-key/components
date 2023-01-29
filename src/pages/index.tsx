import React from "react";

import * as Combobox from "../components/combobox/Combobox";
import { styled } from "../styles/stitches.conf";

const users = [
  { code: 1, value: "Durward Reynolds" },
  { code: 2, value: "Kenton Towne" },
  { code: 3, value: "Therese Wunsch" },
  { code: 4, value: "Benedict Kessler" },
  { code: 5, value: "Katelyn Rohan" },
];

export default function App() {
  return (
    <>
      <Combobox.Root defaultValue={users[0].value} offset={56}>
        <ComboboxTrigger>드롭다운</ComboboxTrigger>
        <ComboboxContents>
          {users.map((user) => (
            <ComboboxItem key={user.code} option={user}>
              {user.value}
            </ComboboxItem>
          ))}
        </ComboboxContents>
      </Combobox.Root>
    </>
  );
}

const ComboboxTrigger = styled(Combobox.Trigger, {
  all: "unset",
  border: "1px solid #ddd",
  width: "100%",
  height: 46,
  px: 20,
  boxSizing: "border-box",
});

const ComboboxContents = styled(Combobox.Contents, {
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  width: "100%",
});

const ComboboxItem = styled(Combobox.Item, {
  boxSizing: "border-box",
  height: 40,
  backgroundColor: "#fff",
  padding: 0,
  width: "100%",
  borderBottom: "1px solid #ddd",
  display: "flex",
  px: 20,
  alignItems: "center",

  "&:first-child": {
    borderTop: "1px solid #ddd",
  },
});
