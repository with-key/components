import React, { ReactNode, useState } from "react";

import { createContext } from "@radix-ui/react-context";
import { Primitive } from "@radix-ui/react-primitive";

import { styled } from "../../styles/stitches.conf";

/* -------------------------------------------------------*
 * Combo box Context
 * ------------------------------------------------------*/

type Context = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  value: string;
  offset: number;
};

const [Provider, useContext] = createContext<Context>("Combobox", {
  open: false,
  value: "",
  setOpen: () => null,
  setValue: () => null,
  offset: 0,
});

/* -------------------------------------------------------*
 * Combo box Root
 * ------------------------------------------------------*/

interface ComboboxRootProps {
  children: ReactNode;
  defaultValue: string;
  offset: number;
}

const ComboboxRoot = ({
  children,
  defaultValue,
  offset,
}: ComboboxRootProps) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string>(defaultValue);

  return (
    <Provider
      open={open}
      setOpen={setOpen}
      value={value}
      setValue={setValue}
      offset={offset}
    >
      <StyledRoot>{children}</StyledRoot>
    </Provider>
  );
};

const StyledRoot = styled(Primitive.div, {
  position: "relative",
});

/* -------------------------------------------------------*
 * Combo box Trigger
 * ------------------------------------------------------*/

interface ComboboxTriggerProps
  extends React.ComponentPropsWithoutRef<typeof StyledButton> {}

const ComboboxTrigger = ({ children, ...restProps }: ComboboxTriggerProps) => {
  const { setOpen, value } = useContext("ComboboxTrigger");

  return (
    <StyledButton
      {...restProps}
      onClick={() => setOpen((pre) => !pre)}
      onBlur={() => {
        setOpen(false);
      }}
    >
      {value}
    </StyledButton>
  );
};

const StyledButton = styled(Primitive.button, {});

/* -------------------------------------------------------*
 * Combo box Contents
 * ------------------------------------------------------*/

interface ComboboxContentsProps
  extends React.ComponentPropsWithoutRef<typeof StyledDiv> {}

const ComboboxContents = ({
  children,
  ...restProps
}: ComboboxContentsProps) => {
  const { open, offset } = useContext("ComboboxTrigger");
  console.log(restProps);
  return open ? (
    <StyledDiv
      {...restProps}
      css={{
        zIndex: open ? 9999 : 0,
        top: offset,
      }}
    >
      {children}
    </StyledDiv>
  ) : null;
};

const StyledDiv = styled(Primitive.div, {
  position: "absolute",
  backgroundColor: "#fff",
});

/* -------------------------------------------------------*
 * Combo box Item
 * ------------------------------------------------------*/

interface ComboboxItemProps
  extends React.ComponentPropsWithoutRef<typeof StyledItem> {
  option: { code: number; value: string };
}

const ComboboxItem = ({
  children,
  option,
  ...restProps
}: ComboboxItemProps) => {
  const { setValue, setOpen } = useContext("ComboboxTrigger");

  return (
    <StyledItem
      {...restProps}
      onMouseDown={() => {
        setValue(option.value);
        setOpen(false);
      }}
    >
      {children}
    </StyledItem>
  );
};

const StyledItem = styled(Primitive.div, {});

export {
  ComboboxRoot as Root,
  ComboboxTrigger as Trigger,
  ComboboxContents as Contents,
  ComboboxItem as Item,
};
