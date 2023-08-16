"use client";

import React from "react";
import { Flex, Image, ImageProps } from "@chakra-ui/react";
import { Text } from "./Text";

interface CardProps extends ImageProps {
  name?: string;
  title: string;
  hrefWeb?: string;
  hrefApple?: string;
  hrefGoogle?: string;
}

export const Card = ({
  name,
  title,
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
        {title}
      </Text>
      <Flex
        direction={["column", "row"]}
        columnGap={5}
        rowGap={5}
        position="relative"
        width="fit-content"
        color="rgba(255, 255, 255, 0.5)"
      >
        <Image
          borderRadius="22.5%"
          alt=""
          draggable={false}
          boxShadow="0px 2px 8px -1px #0000001a"
          {...rest}
        />
        <Flex
          direction="column"
          columnGap={5}
          rowGap={5}
          justifyContent={["flex-start", "center"]}
          alignItems={["center", "flex-start"]}
        >
          {hrefWeb && (
            <Image
              src="/stores/online.png"
              alt="Botão Acessar Online"
              draggable={false}
              onClick={handleOnClickWeb}
              transition="all .2s ease-in-out"
              _hover={{
                cursor: "pointer",
                transition: "all .2s ease-in-out",
                transform: "scale(1.1)",
              }}
            />
          )}
          {hrefApple && (
            <Image
              src="/stores/app-store.png"
              alt="Botão Baixar na Apple Store"
              draggable={false}
              onClick={handleOnClickAppleStore}
              transition="all .2s ease-in-out"
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
              draggable={false}
              onClick={handleOnClickGooglePlay}
              transition="all .2s ease-in-out"
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
