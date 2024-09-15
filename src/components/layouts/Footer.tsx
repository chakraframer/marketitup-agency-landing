import { footer_links, social_links } from '@/data/links.data'
import {
  Box,
  BoxProps,
  Flex,
  Icon,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import UnderlinedLink from '../util/UnderlinedLink'
import Logo from './Logo'
import MyContainer from './MyContainer'
const sitename = process.env.NEXT_PUBLIC_SITENAME_FULL
interface Props extends BoxProps {}
export default function Footer(props: Props) {
  return (
    <Box {...props} bg={'black'}>
      <Box>
        <MyContainer as="footer" role="contentinfo">
          <Stack
            justify="space-between"
            align="start"
            direction={{ base: 'column-reverse', lg: 'row' }}
            py={{ base: '12', lg: '16' }}
            spacing="8"
          >
            <Stack
              align="start"
              fontWeight={'medium'}
              gap={4}
              alignItems={{
                base: 'start',
                lg: 'start',
              }}
              flexDirection={{
                base: 'row',
                lg: 'column',
              }}
              mx={{
                base: 'auto',
                lg: '0',
              }}
            >
              <Logo height={'80px'} />
              <Stack gap={4}>
                <Text fontSize="sm" textAlign={{ base: 'left', lg: 'center' }}>
                  &copy; {new Date().getFullYear()} {sitename}.
                  <br />
                  All rights reserved.
                </Text>
                <Flex gap={6} justifyContent={'center'}>
                  {social_links.map(({ icon, href, label }) => (
                    <Link href={href} target="_blank" key={label}>
                      <Icon
                        as={icon}
                        height={6}
                        width={'auto'}
                        color={'orange.300'}
                        _hover={{ color: 'blue.600' }}
                      />
                    </Link>
                  ))}
                </Flex>
              </Stack>
            </Stack>
            <SimpleGrid
              columns={{ base: 2, lg: 3 }}
              gap={{ base: 10, lg: 20 }}
              width={{ base: 'full', lg: 'auto' }}
            >
              {footer_links.map((group, idx) => (
                <Stack key={idx} spacing="4" minW={{ lg: '40' }}>
                  <Text fontSize="lg" fontWeight="bold">
                    {group.title}
                  </Text>
                  <Stack spacing="3" shouldWrapChildren>
                    {group.links.map((link, idx) => (
                      <UnderlinedLink
                        key={idx}
                        href={link.href}
                        label={link.label}
                      />
                    ))}
                  </Stack>
                </Stack>
              ))}
            </SimpleGrid>
          </Stack>
        </MyContainer>
      </Box>
    </Box>
  )
}
