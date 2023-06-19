import React, { ReactNode } from "react";
import { Flex, Box, Link, Badge, HStack, VStack } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Text } from "./Text";

interface CardProps {
  title: string;
  subtitle: string;
  href?: string;
  children?: ReactNode;
}

export const Card = ({ title, subtitle, href, children }: CardProps) => {
  const Released = () => (
    <Link
      display="flex"
      flexDirection="row"
      columnGap={3}
      href={href}
      target="_blank"
    >
      <Text as="h1">{title}</Text>
      <Box as="sub" transition="transform 200ms">
        <ExternalLinkIcon />
      </Box>
    </Link>
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

  return (
    <Flex
      flexDirection="column"
      padding="1rem 1.2rem"
      height={390}
      borderRadius={8}
      _hover={{
        background: "rgba(100, 100, 100, 0.1)",
        span: {
          transform: "translateX(4px)",
        },
      }}
    >
      <Flex
        fontSize="1.5rem"
        fontWeight={600}
        flexDirection="column"
        columnGap={3}
      >
        {!!href ? <Released /> : <Soon />}
        <Text fontSize={19} fontWeight="hairline">
          {subtitle}
        </Text>
      </Flex>
      <Flex color="rgba(255, 255, 255, 0.5)">{children}</Flex>
    </Flex>
  );
};
