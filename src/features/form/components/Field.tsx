import React from "react";
import styled from "styled-components";
import { clearPrice } from "../lib";

export type TextFieldValue = { raw: string; formatted: string };

type TextFieldCore = {
  value: string;
  _onChange: (value: { raw: string; formatted: string }) => void;
  format?: (value: string) => string;
};

type TextField = {
  type: "text";
} & TextFieldCore;

type PwField = {
  type: "password";
} & TextFieldCore;

type Props =
  | {
      placeholder?: string;
    } & (TextField | PwField);

const Field = ({ value, type, _onChange, placeholder, format }: Props) => {
  return (
    <StInput
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={(e) => {
        const { value } = e.target;

        if (format) {
          _onChange({ raw: clearPrice(value), formatted: format(value) });
        } else {
          _onChange({ raw: clearPrice(value), formatted: value });
        }
      }}
    />
  );
};

export default Field;

const StInput = styled.input`
  width: 240px;
  height: 40px;
  border: 0.05em solid #ddd;
  padding: 8px;
  border-radius: 8px;
`;
