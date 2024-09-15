import { userStories } from '@/data/userStories.data'
import {
  Avatar,
  Box,
  BoxProps,
  Card,
  Divider,
  Flex,
  HStack,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react'
import { BiSolidQuoteAltLeft } from 'react-icons/bi'
import MyContainer from '../layouts/MyContainer'
import { motion } from 'framer-motion'
interface Props extends BoxProps {}

export default function UserStories({}: Props) {
  return (
    <Box bg={'orange.100'} color={'black'}>
      <MyContainer
        as={Stack}
        gap={6}
        justifyContent={'center'}
        alignItems={'center'}
        textAlign={'center'}
        py={20}
      >
        <Heading fontSize={['4xl', '5xl']}>User Stories</Heading>
        <Text fontSize={['2xl', '3xl']} fontWeight={'medium'} maxW={'3xl'}>
          Get to know our users and learn how they are using our platform to
          grow their businesses.
        </Text>
        <Stack
          mt={10}
          gap={20}
          justifyContent={'center'}
          width={'full'}
          alignItems={'center'}
        >
          {userStories.map((story, index) => (
            <UserStoryCard
              key={story.name}
              {...story}
              isEven={(index + 1) % 2 === 0}
            />
          ))}
        </Stack>
      </MyContainer>
    </Box>
  )
}
type UserStoryCardProps = {
  name: string
  position: string
  story: string
  image: string
  isEven: boolean
}
const UserStoryCard = ({
  name,
  position,
  story,
  image,
  isEven,
}: UserStoryCardProps) => {
  return (
    <Flex
      maxW={'3xl'}
      position={'relative'}
      justifyContent={'center'}
      transform={'rotate(-1deg)'}
      mr={{ lg: isEven ? '100px' : 0 }}
      ml={{ lg: isEven ? 0 : '100px' }}
    >
      <Box
        bg={'gray.600'}
        height={'full'}
        width={'calc(100% - 20px)'}
        borderRadius={'2xl'}
        position={'absolute'}
        top={0}
        transform={'rotate(-3deg)'}
      />
      <motion.a
        whileHover={{ scale: 1.1 }}
        onHoverStart={(e) => {}}
        onHoverEnd={(e) => {}}
      >
        <Card
          textAlign={'left'}
          variant={'outline'}
          p={8}
          borderRadius={'2xl'}
          position={'relative'}
          cursor={'pointer'}
        >
          <Icon
            as={BiSolidQuoteAltLeft}
            position={'absolute'}
            top={-6}
            height={50}
            width={50}
            right={isEven ? 'auto' : 8}
            left={isEven ? 8 : 'auto'}
            fontSize={'3xl'}
            color={'orange.400'}
          />
          <Flex
            gap={8}
            flexDirection={{
              base: 'column',
              lg: isEven ? 'row' : 'row-reverse',
            }}
          >
            <Text flex={1} fontSize={'sm'}>
              "{story}"
            </Text>
            <Box>
              <Divider orientation={'vertical'} hideBelow={'lg'} />
              <Divider orientation={'horizontal'} hideFrom={'lg'} />
            </Box>
            <HStack pr={8} gap={4}>
              <Avatar name={name} size={'lg'} src={image} />
              <Stack gap={0}>
                <Text fontSize={'xl'} fontWeight={'semibold'}>
                  {name}
                </Text>
                <Text fontSize={'sm'} fontWeight={'medium'}>
                  {position}
                </Text>
              </Stack>
            </HStack>
          </Flex>
        </Card>
      </motion.a>
    </Flex>
  )
}
