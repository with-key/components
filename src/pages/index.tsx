import React, { useEffect, useState } from "react";
import axios from "axios";

import * as Combobox from "../components/combobox/Combobox";
import { styled } from "../styles/stitches.conf";

export default function App() {
  const [fetchUsers, setFetchUsers] = useState<
    {
      code: number;
      value: string;
    }[]
  >();

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get("api/users");
      setFetchUsers(data.users);
    };

    fetchUsers();
  }, []);

  return (
    <>
      <Combobox.Root
        defaultValue={"선택해주세요."}
        offset={56}
        getValues={(option) => console.log(option)}
      >
        <ComboboxTrigger>드롭다운</ComboboxTrigger>
        <ComboboxContents>
          {fetchUsers
            ? fetchUsers.map((user) => (
                <ComboboxItem key={user.code} option={user}>
                  {user.value}
                </ComboboxItem>
              ))
            : "로딩 중.."}
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
