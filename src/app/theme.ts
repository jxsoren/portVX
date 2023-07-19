import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import "@fontsource/space-mono";
import "@fontsource/roboto";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const theme = extendTheme({
  ...config,
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
    gray: {
      50: "#F7FAFC",
      100: "#EDF2F7",
      200: "#E2E8F0",
      300: "#CBD5E0",
      400: "#A0AEC0",
      500: "#718096",
      600: "#4A5568",
      700: "#2D3748",
      800: "#1A202C",
      900: "#171923",
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
