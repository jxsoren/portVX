import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import "@fontsource/space-mono";
import "@fontsource/roboto";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const theme = extendTheme({
  ...config,
  breakpoints: {
    xs: "20em",
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    xxl: "96em",
  },
  colors: {
    brand: {
      100: "#f7fafc",
      900: "#1a202c",
    },
    light: {
      text: "#000000",
      background: "#ffffff",
    },
    dark: {
      text: "#ffffff",
      background: "#000000",
    },
  },
  fonts: {
    heading: `'Space Mono', sans-serif`,
    body: `'Space Mono', sans-serif`,
  },
  styles: {
    global: (props: Record<string, any>) => ({
      body: {
        color: props?.colorMode === "light" ? "light.text" : "dark.text",
        bg:
          props?.colorMode === "light" ? "light.background" : "dark.background",
      },
      h3: {
        background: "linear-gradient(to right, #7928CA, #FF0080)",
        "-webkit-background-clip": "text",
        "-webkit-text-fill-color": "transparent",
        textShadow: "1px 1px #FF0080",
      },
    }),
  },
});

export default theme;
