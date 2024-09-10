import { extendTheme } from "@chakra-ui/react";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";
// import { Space_Grotesk } from "@next/font/google";
import {
  Inter as PrimaryFont,
  Amatic_SC as SecondaryFont,
} from "@next/font/google";

// const spaceGrotesk = CoffingFont({ subsets: ["latin"] });
const primaryFont = PrimaryFont({ subsets: ["latin"] });
const secondaryFont = SecondaryFont({ subsets: ["latin"], weight: "400" });

export const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        fontFamily: primaryFont.style.fontFamily,
        color: "#ffffff",
        bg: "#111111",
        lineHeight: "base",
      },
      h3: {
        fontFamily: secondaryFont.style.fontFamily,
      },
    }),
  },
});
