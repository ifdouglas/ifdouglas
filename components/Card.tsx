import React, { ReactNode } from "react";
import { Flex, Box, HStack, BoxProps, Image } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Text } from "./Text";

interface CardProps extends BoxProps {
  title: string;
  subtitle: string;
  href?: string;
  imgSrc: string;
  imgAlt: string;
  imgSize: number;
}

export const Card = ({
  title,
  subtitle,
  href,
  imgSrc,
  imgAlt,
  imgSize,
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
      justifyContent={["center", "flex-start"]}
      alignItems={["center", "flex-start"]}
      height={390}
      borderRadius={16}
      _hover={{
        background: bgColor,
        span: {
          transform: "translateX(4px)",
        },
      }}
      {...rest}
    >
      {/* <Flex fontSize="1.5rem" fontWeight={600} direction="column" columnGap={3}> */}
      {/* <Released /> */}
      <Text fontSize={19} fontWeight="regular">
        {subtitle}
      </Text>
      {/* </Flex> */}
      <Flex
        position="relative"
        width="fit-content"
        color="rgba(255, 255, 255, 0.5)"
        onClick={handleOnClick}
        transition="all .2s ease-in-out"
        _hover={{
          cursor: "pointer",
          transition: "all .2s ease-in-out",
          transform: "scale(1.1)",
        }}
      >
        <Image
          borderRadius={16}
          src={imgSrc}
          alt={imgAlt}
          width={imgSize}
          height={imgSize}
        />
        {/* <Image
          src={imgSrc}
          alt={imgAlt}
          width={imgSize - 50}
          height={imgSize - 50}
          filter="blur(10px)"
          position="absolute"
          bottom={-3}
          right={0}
          left={0}
          margin="auto"
        /> */}
      </Flex>
    </Flex>
  );
};
