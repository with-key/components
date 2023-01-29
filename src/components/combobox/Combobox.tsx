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
};

const [Provider, useContext] = createContext<Context>("Combobox", {
  open: false,
  value: "",
  setOpen: () => null,
  setValue: () => null,
});

/* -------------------------------------------------------*
 * Combo box Root
 * ------------------------------------------------------*/

interface ComboboxRootProps {
  children: ReactNode;
  defaultValue: string;
}

const ComboboxRoot = ({ children, defaultValue }: ComboboxRootProps) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string>(defaultValue);

  return (
    <Provider open={open} setOpen={setOpen} value={value} setValue={setValue}>
      {children}
    </Provider>
  );
};

/* -------------------------------------------------------*
 * Combo box Trigger
 * ------------------------------------------------------*/

interface ComboboxTriggerProps
  extends React.ComponentPropsWithoutRef<typeof StyledButton> {}

const ComboboxTrigger = ({ children, ...restProps }: ComboboxTriggerProps) => {
  const { setOpen, value } = useContext("ComboboxTrigger");
  console.log(value);

  return (
    <StyledButton {...restProps} onClick={() => setOpen((pre) => !pre)}>
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
  const { open } = useContext("ComboboxTrigger");
  console.log(children);
  return open ? <StyledDiv {...restProps}>{children}</StyledDiv> : null;
};

const StyledDiv = styled(Primitive.div, {});

/* -------------------------------------------------------*
 * Combo box Item
 * ------------------------------------------------------*/

interface ComboboxItemProps
  extends React.ComponentPropsWithoutRef<typeof StyledItem> {
  value: string;
}

const ComboboxItem = ({ children, value, ...restProps }: ComboboxItemProps) => {
  const { setValue } = useContext("ComboboxTrigger");

  return (
    <StyledItem
      {...restProps}
      onClick={(e) => {
        console.log(value);
        setValue(value);
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
