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
 * price format input
 *--------------------------------------------------------*/

interface PriceInputProps extends Props {}

const PriceInput = ({ getValues }: PriceInputProps) => {
  const [price, setPrice] = useState({
    origin: "0",
    format: "0",
  });

  const onChageHandler = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const origin = target.value.replaceAll(",", "");
    // 방법 2] .replace(/[^0-9]/g, "")
    const format = new Intl.NumberFormat().format(
      +target.value.replace(/[^0-9]/g, "").replaceAll(",", "")
    );

    // 방법 1
    // const rex = /\D/g;
    // if (!rex.test(target.value.replaceAll(",", ""))) {
    //   setValue((old) => ({
    //     ...old,
    //     raw,
    //     format,
    //   }));

    //   getValues && getValues({ origin, format });
    // }

    setPrice((pre) => ({
      ...pre,
      origin,
      format,
    }));
    getValues && getValues({ origin, format });
  };

  return <PrmitiveInput onChange={onChageHandler} value={price.format} />;
};

/*--------------------------------------------------------*
 * id number format input
 *--------------------------------------------------------*/

interface IinoInputProps extends Props {}

const IinoInput = ({ getValues }: IinoInputProps) => {
  const [iino, setIino] = useState<ValuesType>({
    origin: "",
    format: "",
  });

  console.log(iino);

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

  return <PrmitiveInput onChange={onChangeHandler} value={iino.format} />;
};

const Price = PriceInput;
const Iino = IinoInput;

export { Price, Iino };
