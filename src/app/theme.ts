import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

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
    }
  },
  styles: {
    global: (props: Record<string, any>) => ({
      body: {
        color: props?.colorMode === "light" ? "light.text" : "dark.text",
        bg: props?.colorMode === "light" ? "light.background" : "dark.background",
      },
    }),
  },
});


export default theme