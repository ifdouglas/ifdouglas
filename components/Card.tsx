import React, { ReactNode } from "react";
import {
  Flex,
  Box,
  Link,
  Badge,
  HStack,
  VStack,
  BoxProps,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Text } from "./Text";

interface CardProps extends BoxProps {
  title: string;
  subtitle: string;
  href?: string;
  children?: ReactNode;
}

export const Card = ({
  title,
  subtitle,
  href,
  children,
  bgColor,
  ...rest
}: CardProps) => {
  const Released = () => (
    <Flex direction="row" columnGap={3}>
      <Text as="h1">{title}</Text>
      <Box as="sub" transition="transform 200ms">
        <ExternalLinkIcon />
      </Box>
    </Flex>
  );

  const Soon = () => (
    <HStack>
      <Text>{title}</Text>
      <Text
        as="sub"
        transition="transform 200ms"
        textTransform="uppercase"
        fontSize={11}
      >
        soon
      </Text>
    </HStack>
  );

  const handleOnClick = () => window.open(href, "_blank", "noreferrer");

  return (
    <Flex
      direction="column"
      rowGap={5}
      padding="1rem 1.2rem"
      height={390}
      borderRadius={8}
      _hover={{
        background: bgColor,
        span: {
          transform: "translateX(4px)",
        },
      }}
      {...rest}
    >
      <Flex fontSize="1.5rem" fontWeight={600} direction="column" columnGap={3}>
        {/* <Released /> */}
        <Text fontSize={19} fontWeight="regular">
          {subtitle}
        </Text>
      </Flex>
      <Flex
        width="fit-content"
        color="rgba(255, 255, 255, 0.5)"
        onClick={handleOnClick}
        _hover={{
          cursor: "pointer",
          transition: "transform .2s ease-in-out",
          transform: "scale(1.1)",
        }}
      >
        {children}
      </Flex>
    </Flex>
  );
};
