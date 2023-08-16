"use client";

import React from "react";
import {
  Flex,
  Box,
  HStack,
  Image,
  ImageProps,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Text } from "./Text";

interface CardProps extends ImageProps {
  title: string;
  subtitle: string;
  hrefWeb?: string;
  hrefApple?: string;
  hrefGoogle?: string;
}

export const Card = ({
  title,
  subtitle,
  hrefWeb,
  hrefApple,
  hrefGoogle,
  ...rest
}: CardProps) => {
  const handleOnClickAppleStore = () =>
    window.open(hrefApple, "_blank", "noreferrer");
  const handleOnClickGooglePlay = () =>
    window.open(hrefGoogle, "_blank", "noreferrer");
  const handleOnClickWeb = () => window.open(hrefWeb, "_blank", "noreferrer");

  return (
    <Flex
      direction="column"
      rowGap={5}
      padding="1rem 1.2rem"
      justifyContent={["center", "flex-start"]}
      alignItems={["center", "flex-start"]}
      height={[450, 390]}
      borderRadius={16}
      _hover={{
        span: {
          transform: "translateX(4px)",
        },
      }}
    >
      <Text fontSize={19} fontWeight="regular">
        {subtitle}
      </Text>
      <Flex
        direction={["column", "row"]}
        columnGap={5}
        rowGap={2}
        position="relative"
        width="fit-content"
        color="rgba(255, 255, 255, 0.5)"
      >
        <Image borderRadius={16} alt="" draggable={false} {...rest} />
        <Flex
          direction="column"
          columnGap={5}
          justifyContent="flex-start"
          alignItems="center"
        >
          {hrefApple && (
            <Image
              src="/stores/app-store.svg"
              alt="Botão Baixar na Apple Store"
              width={150}
              height={62}
              draggable={false}
              onClick={handleOnClickAppleStore}
              _hover={{
                cursor: "pointer",
                transition: "all .2s ease-in-out",
                transform: "scale(1.1)",
              }}
            />
          )}
          {hrefGoogle && (
            <Image
              src="/stores/google-play.png"
              alt="Botão Disponível no Google play"
              width={150}
              height={63}
              draggable={false}
              onClick={handleOnClickGooglePlay}
              _hover={{
                cursor: "pointer",
                transition: "all .2s ease-in-out",
                transform: "scale(1.1)",
              }}
            />
          )}
          {hrefWeb && (
            <Image
              src="/stores/online.svg"
              alt="Botão Acessar Online"
              height={50}
              draggable={false}
              onClick={handleOnClickWeb}
              _hover={{
                cursor: "pointer",
                transition: "all .2s ease-in-out",
                transform: "scale(1.1)",
              }}
            />
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};
