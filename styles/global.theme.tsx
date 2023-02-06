import { extendTheme } from "@chakra-ui/react";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";
// import { Space_Grotesk } from "@next/font/google";
import { Inter } from "@next/font/google";

// const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export const theme = extendTheme({
  // config: {
  //   initialColorMode: "dark",
  //   useSystemColorMode: false,
  // },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        fontFamily: inter.style.fontFamily,
        // color: mode("gray.800", "whiteAlpha.900")(props),
        color: "whiteAlpha.900",
        lineHeight: "base",
      },
    }),
  },
});
