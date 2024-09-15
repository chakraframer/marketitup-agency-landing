import Footer from '@/components/layouts/Footer'
import Header from '@/components/layouts/Header'
import MyContainer from '@/components/layouts/MyContainer'
import ContactUsRegionBottons from '@/components/util/ContactUsRegionBottons'
import theme from '@/styles/theme'
import { Box, ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], display: 'swap' })
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.className}`}>
      <ChakraProvider theme={theme}>
        <Header />
        <Box
          color="gray.100"
          minH={'calc(100vh - 60px - 200px)'}
          overflowX={'hidden'}
        >
          <Component {...pageProps} />
          <MyContainer my={10}>
            <ContactUsRegionBottons />
          </MyContainer>
        </Box>
        <Footer />
      </ChakraProvider>
    </main>
  )
}
