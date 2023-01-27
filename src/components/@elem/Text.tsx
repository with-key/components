import React, { forwardRef, ComponentProps, CSSProperties } from "react";
import { Primitive } from "@radix-ui/react-primitive";
import type * as Radix from "@radix-ui/react-primitive";
import type * as Stitches from "@stitches/react";

type PrimitiveTextProps = React.ComponentPropsWithoutRef<typeof Primitive.div>;
interface TextProps extends PrimitiveTextProps {}

export default function Text({}: TextProps) {
  return <div></div>;
}
