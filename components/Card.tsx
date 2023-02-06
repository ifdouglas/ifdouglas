import React, { ReactNode } from "react";
import { Flex, Box, Link, Badge } from "@chakra-ui/react";
import { Text } from "./Text";

interface CardProps {
  title: string;
  href?: string;
  children?: ReactNode;
}

export const Card = ({ title, href, children }: CardProps) => {
  const Released = () => (
    <>
      <Link href="https://www.coffing.app">
        <Text>{title}</Text>
      </Link>
      <Box as="span" display="inline-block" transition="transform 200ms">
        -&gt;
      </Box>
    </>
  );

  const Soon = () => (
    <>
      <Text>{title}</Text>
      <Badge
        as="span"
        display="inline-block"
        transition="transform 200ms"
        textTransform="uppercase"
        height={5}
      >
        <Text>soon</Text>
      </Badge>
    </>
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
        flexDirection="row"
        columnGap={3}
      >
        {!!href ? <Released /> : <Soon />}
      </Flex>
      <Flex color="rgba(255, 255, 255, 0.5)">{children}</Flex>
    </Flex>
  );
};
