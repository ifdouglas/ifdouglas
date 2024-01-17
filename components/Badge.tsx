import React from "react";
import {
  Badge as ChakraBadge,
  BadgeProps as ChakraBadgeProps,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

interface BadgeProps extends ChakraBadgeProps {
  value: string;
}

export const Badge = ({ value, ...rest }: BadgeProps) => {
  const { t } = useTranslation();

  return (
    <ChakraBadge height="20px" borderRadius={4} {...rest}>
      {t(value)}
    </ChakraBadge>
  );
};
