import React from "react";
import {
  Text as ChakraText,
  TextProps as ChakraTextProps,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

interface TextProps extends ChakraTextProps {
  children: string;
}

export const Text = ({ children, ...rest }: TextProps) => {
  const { t } = useTranslation();

  return <ChakraText {...rest}>{t(children)}</ChakraText>;
};
