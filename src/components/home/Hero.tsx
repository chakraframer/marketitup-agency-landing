import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Center,
  GridItem,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import Image from 'next/image'

const users = [
  {
    name: 'Jake Nackos',
    src: '/assets/users/jake-nackos.jpg',
  },
  {
    name: 'Alex',
    src: '/assets/users/alex.jpg',
  },
  {
    name: 'E Johnson',
    src: '/assets/users/e-johnson.jpg',
  },
  {
    name: 'Emmanuel',
    src: '/assets/users/emmanuel.jpg',
  },
  {
    name: 'Samantha',
    src: '/assets/users/samantha.jpg',
  },
]

export default function Hero() {
  return (
    <Stack gap={{ base: 10, lg: 20 }}>
      <Center>
        <Heading
          maxW={'container.md'}
          textAlign={'center'}
          fontSize={['4xl', '5xl']}
          color={'white'}
        >
          We enable businesses{' '}
          <Text as={'span'} layerStyle="textYellowOrangeGradient">
            sky rocket their sales
          </Text>
        </Heading>
      </Center>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={10} px={4}>
        <GridItem as={Stack} gap={8}>
          <Box>
            <Button
              colorScheme="orange"
              variant="outline"
              display={'inline'}
              borderRadius={'xl'}
              shadow={'md'}
            >
              <Text>
                <Text as={'span'} fontWeight={'bold'}>
                  New!
                </Text>{' '}
                - Get 50% off on all plans 🎉
              </Text>
            </Button>
          </Box>
          <Text fontSize={['3xl', '4xl']} fontWeight={'medium'}>
            Take your business to the next level with our sales generating
            strategies
          </Text>
          <Stack>
            <AvatarGroup size="md">
              {users.map((user) => (
                <Avatar key={user.name} name={user.name} src={user.src} />
              ))}
            </AvatarGroup>
            <Text fontSize={'sm'}>
              Join a community of over 2.1K businesses who are using our
              platform
            </Text>
          </Stack>
        </GridItem>
        <GridItem display={'flex'} justifyContent={'center'}>
          <Box transform={'rotate(-5deg)'}>
            <Image
              src={'/assets/hero.png'}
              alt="hero image"
              height={650}
              width={650}
            />
          </Box>
        </GridItem>
      </SimpleGrid>
    </Stack>
    
  )
}
