import React, { useState } from "react";
import Select, { SelectOptions } from "../../components/Select";
import styled from "styled-components";

const options = [
  { label: "First", value: 1 },
  { label: "Second", value: 2 },
  { label: "Third", value: 3 },
  { label: "Fourth", value: 4 },
  { label: "Fifth", value: 5 },
];

const SelectPage = () => {
  const [value, setValue] = useState<SelectOptions | undefined>(options[0]);
  const [multi, setMulti] = useState<SelectOptions[]>([options[0]]);
  return (
    <>
      <Select
        options={options}
        value={value}
        multiple={false}
        onChange={(value) => {
          setValue(value);
        }}
      />
      <StCode>
        <code>{JSON.stringify(value)}</code>
      </StCode>

      <Select
        options={options}
        value={multi}
        multiple={true}
        onChange={(value) => {
          setMulti(value);
        }}
      />

      <StCode>
        <code>{JSON.stringify(multi)}</code>
      </StCode>
    </>
  );
};

export default SelectPage;

const StCode = styled.div`
  margin: 10px;
  width: 30%;
  background-color: #eee;
`;
