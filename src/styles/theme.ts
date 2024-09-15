import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  // custom color for scrollbar
  styles: {
    global: {
      margin: 0,
      padding: 0,
      body: {
        color: '#ffffff',
        background: '#1A202C',
      }
    },
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  layerStyles: {
    textYellowOrangeGradient: {
      background: 'linear-gradient(45deg, #FAF089 4.87%, #DD6B20 83.13%)',
      backgroundClip: 'text',
    },
  },
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
})

export default theme
