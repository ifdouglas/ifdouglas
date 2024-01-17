import React, { ReactNode } from "react";
import { Flex, keyframes } from "@chakra-ui/react";

interface CardAnimatedProps {
  children: ReactNode;
}

export const AnimatedCard = ({ children }: CardAnimatedProps) => {
  const rotate = keyframes`
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0deg);
    }
  `;

  return (
    <Flex
      display="flex"
      flexDirection="column"
      position="relative"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      height={[400, 400]}
      padding={10}
      transform="translateZ(0)"
      borderRadius={16}
      overflow="hidden"
      boxShadow="0px 2px 8px -1px #0000001a"
      _before={{
        content: "''",
        position: "absolute",
        zIndex: -1,
        animation: `6s ${rotate} linear infinite`,
        width: "200%",
        height: "200%",
        background:
          "conic-gradient(#ffffff80,#ffffff40,#ffffff30,#ffffff20,#ffffff10,#ffffff10,#ffffff80);",
      }}
      _after={{
        content: "''",
        position: "absolute",
        zIndex: -1,
        inset: 0,
        padding: 1,
        borderRadius: 16,
        background:
          "linear-gradient(to bottom right, rgba(2, 13, 46, 1), rgba(2, 5, 19, 1))",
        backgroundClip: "content-box",
      }}
    >
      {children}
    </Flex>
  );
};
