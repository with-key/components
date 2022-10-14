import React, { useState } from "react";
import Select, { SelectOptions } from "../../components/Select";

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

      <Select
        options={options}
        value={multi}
        multiple={true}
        onChange={(value) => {
          setMulti(value);
        }}
      />
    </>
  );
};

export default SelectPage;
