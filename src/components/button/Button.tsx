import React, { ElementRef, forwardRef } from "react";

import { Primitive } from "@radix-ui/react-primitive";
import { createContext } from "@radix-ui/react-context";

import { styled } from "../../styles/stitches.conf";

/* -------------------------------------------------------*
 * Button Context (Custom hook)
 * ------------------------------------------------------*/

type ButtonContext = {
  size: "xl" | "l";
};

const [ButtonProvider, useButtonContext] = createContext<ButtonContext>(
  "Button",
  {
    size: "xl",
  }
);

/* -------------------------------------------------------*
 * Button Implements
 * ------------------------------------------------------*/

type ButtonElement = ElementRef<typeof StyledButton>; // Ref 타입
interface Props extends React.ComponentPropsWithoutRef<typeof StyledButton> {} // 컴포넌트 Props 타입

export const ButtonImpl = forwardRef<ButtonElement, Props>(
  ({ children, ...restProps }, ref) => {
    return (
      <ButtonProvider size="l">
        <StyledButton ref={ref} {...restProps}>
          <>
            <ButtonLeftSlot></ButtonLeftSlot>
            {children}
          </>
        </StyledButton>
      </ButtonProvider>
    );
  }
);

ButtonImpl.displayName = "Button";
const StyledButton = styled(Primitive.button, {});

/* -------------------------------------------------------*
 * Button Slot
 * ------------------------------------------------------*/

const ButtonLeftSlot = () => {
  const { size } = useButtonContext("Button.LeftSlot");
  console.log(size); // 'l'
  return <div></div>;
};

const Button = Object.assign({}, ButtonImpl, {
  ButtonLeftSlot,
});

export default Button;
