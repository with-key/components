import React, { ChangeEvent, useState } from "react";
import { styled } from "../styles/stitches.conf";

export type ValuesType = {
  origin: string;
  format: string;
};

/*--------------------------------------------------------*
 * Primitive Input
 *--------------------------------------------------------*/

interface Props extends React.ComponentPropsWithoutRef<typeof StyledInput> {
  getValues?: (values: ValuesType) => void;
}

const PrmitiveInput = ({ value, ...restProps }: Props) => {
  return <StyledInput {...restProps} value={value ?? value} type="text" />;
};

const StyledInput = styled("input", {
  //
});

/*--------------------------------------------------------*
 * 금액 형식
 *--------------------------------------------------------*/

interface PriceInputProps extends Props {}

const PriceInput = ({ getValues, ...restProps }: PriceInputProps) => {
  const [price, setPrice] = useState({
    origin: "0",
    format: "0",
  });

  const onChageHandler = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target;

    const origin = value.replaceAll(",", "");
    const format = new Intl.NumberFormat().format(
      +value.replace(/[^0-9]/g, "").replaceAll(",", "")
    );

    setPrice((pre) => ({
      ...pre,
      origin,
      format,
    }));

    getValues && getValues({ origin, format });
  };

  return (
    <PrmitiveInput
      onChange={onChageHandler}
      value={price.format}
      {...restProps}
    />
  );
};

/*--------------------------------------------------------*
 * 주민등록번호 형식
 *--------------------------------------------------------*/

interface IinoInputProps extends Props {}

const IinoInput = ({ getValues, ...restProps }: IinoInputProps) => {
  const [iino, setIino] = useState<ValuesType>({
    origin: "",
    format: "",
  });

  const onChangeHandler = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target;

    const format = value
      .replace(/[^0-9]/g, "")
      .replace(/^(\d{0,6})(\d{0,7})$/g, "$1-$2")
      .replace(/-{1,2}$/g, "");

    if (value.length <= 14) {
      setIino((pre) => ({
        ...pre,
        origin: value.replaceAll("-", ""),
        format: format,
      }));
      getValues && getValues({ origin: value, format: value });
    }
  };

  return (
    <PrmitiveInput
      onChange={onChangeHandler}
      value={iino.format}
      {...restProps}
    />
  );
};

/*--------------------------------------------------------*
 * 일반 텍스트 형식
 *--------------------------------------------------------*/

interface TextInputProps extends Props {}

const TextInput = ({ getValues, ...restProps }: TextInputProps) => {
  const [text, setText] = useState<ValuesType>({
    origin: "",
    format: "",
  });

  const onChangeHandler = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    setText((pre) => ({ ...pre, origin: value, format: value }));
    getValues && getValues({ origin: value, format: value });
  };

  return (
    <PrmitiveInput
      onChange={onChangeHandler}
      value={text.format}
      {...restProps}
    />
  );
};

/*--------------------------------------------------------*
 * Result
 *--------------------------------------------------------*/

const Price = PriceInput;
const Text = TextInput;
const Iino = IinoInput;

export { Price, Iino, Text };
