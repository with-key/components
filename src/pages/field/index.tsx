import React, { useState } from "react";
import Field, { TextFieldValue } from "../../features/form/components/Field";
import { price } from "../../features/form/lib";

const FieldPage = () => {
  const [value, setValue] = useState<TextFieldValue>({
    raw: "",
    formatted: "",
  });

  const [pwd, setPwd] = useState<TextFieldValue>({
    raw: "",
    formatted: "",
  });

  return (
    <>
      <div>
        <Field
          type="text"
          placeholder="Price"
          value={value.formatted}
          format={price}
          _onChange={(value) => {
            setValue(value);
          }}
        />
      </div>
      <div>
        <Field
          type="password"
          placeholder="password"
          value={pwd.raw}
          _onChange={(value) => {
            setPwd(value);
          }}
        />
      </div>

      <button
        onClick={() => {
          console.log(value);
          console.log(pwd);
        }}
      >
        버튼
      </button>
    </>
  );
};

export default FieldPage;
