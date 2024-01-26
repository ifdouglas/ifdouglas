"use client";

import React, { ReactNode } from "react";
import { Flex, Image, ImageProps } from "@chakra-ui/react";
import { Text } from "./Text";

interface CardProps extends ImageProps {
  name: string;
  title: string;
  hrefWeb?: string;
  hrefApple?: string;
  hrefGoogle?: string;
  hrefGpt?: string;
  badges?: ReactNode[];
}

export const Card = ({
  name,
  title,
  hrefWeb,
  hrefApple,
  hrefGoogle,
  hrefGpt,
  badges,
  ...rest
}: CardProps) => {
  const handleOnClick = (href: string) =>
    window.open(href, "_blank", "noreferrer");

  return (
    <Flex
      direction="column"
      rowGap={3}
      gridRowGap="2, 5"
      padding="1rem 1.2rem"
      justifyContent={["center", "flex-start"]}
      alignItems={["center", "flex-start"]}
      height={[500, 330]}
      borderRadius={16}
    >
      <Flex direction={["column", "row"]} width="100%" columnGap={2} rowGap={2}>
        <Text fontSize={21} fontWeight="bold">
          {name}
        </Text>
        {badges}
      </Flex>
      <Text fontSize={19} fontWeight="regular" height={[80, 60]}>
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
              onClick={() => handleOnClick(hrefWeb)}
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
              onClick={() => handleOnClick(hrefApple)}
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
              onClick={() => handleOnClick(hrefGoogle)}
              transition="all .2s ease-in-out"
              _hover={{
                cursor: "pointer",
                transition: "all .2s ease-in-out",
                transform: "scale(1.1)",
              }}
            />
          )}
          {hrefGpt && (
            <Image
              src="/stores/gptstoreai.png"
              alt="Botão Disponível na GPT Store AI"
              draggable={false}
              onClick={() => handleOnClick(hrefGpt)}
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
