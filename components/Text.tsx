import React from "react";
import {
  Text as ChakraText,
  TextProps as ChakraTextProps,
} from "@chakra-ui/react";

interface TextProps extends ChakraTextProps {}

export const Text = ({ children, ...rest }: TextProps) => (
  <ChakraText {...rest}>{children}</ChakraText>
);
