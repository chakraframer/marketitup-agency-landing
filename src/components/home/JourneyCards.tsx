import { journeyData } from '@/data/journey.data'
import {
  Box,
  Flex,
  FlexProps,
  HTMLChakraProps,
  Heading,
  Image,
  Stack,
  Text,
  chakra,
} from '@chakra-ui/react'
import { motion, useScroll } from 'framer-motion'
import { useRef } from 'react'

interface Props extends FlexProps {}
export default function JourneyCards(props: Props) {
  return (
    <Flex flexDirection={'column'} {...props} fontSize={'lg'}>
      <Heading
        mb={10}
        fontSize={['3xl', '4xl']}
        textAlign={'center'}
        fontWeight={'bold'}
        color={'white'}
      >
        How it works? How we help you?
      </Heading>
      <Stack
        gap={{
          base: 10,
          lg: 0,
        }}
      >
        {journeyData.map((journey, index) => (
          <JourneyCard key={journey.heading} {...journey} index={index} />
        ))}
      </Stack>
    </Flex>
  )
}

type JourneyCardProps = {
  heading: string
  text: string
  image: string
  index: number
}

const JourneyCard = ({ heading, text, image, index }: JourneyCardProps) => {
  const isEven = (index + 1) % 2 === 0
  return (
    <Box>
      <Flex
        flexDirection={{ base: 'column', md: isEven ? 'row' : 'row-reverse' }}
        justifyContent={'space-between'}
        alignItems={'center'}
        gap={{ base: 6, lg: 0 }}
      >
        <Stack gap={{ base: 4, lg: 6 }} my={'auto'} flex={1}>
          <Heading
            fontSize={['2xl', '3xl']}
            fontWeight={'bold'}
            color={'white'}
          >
            {heading}
          </Heading>
          <Text>{text}</Text>
        </Stack>

        <motion.div
          initial={{ scale: 0.6 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          style={{
            flex: 1,
            zIndex: 1,
          }}
          // shake on hover
        >
          <Image
            marginLeft={{ base: 'auto', lg: isEven ? 'auto' : 0 }}
            marginRight={{ base: 'auto', lg: isEven ? 0 : 'auto' }}
            width={{ base: 150, md: 200, lg: 350 }}
            height={{ base: 150, md: 200, lg: 350 }}
            src={image}
            alt={heading}
          />
        </motion.div>
      </Flex>

      {journeyData.length - 1 > index && (
        <JourneyLine transform={isEven ? 'scaleX(-1)' : 'none'} mx={'auto'} />
      )}
    </Box>
  )
}

type JourneyLineProps = HTMLChakraProps<'svg'>
export function JourneyLine(props: JourneyLineProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'start end'],
  })
  return (
    <Box
      ref={ref}
      height={180}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      hideBelow={'lg'}
      width={'full'}
      zIndex={0}
    >
      <chakra.svg
        width="690"
        height="408"
        viewBox="0 0 690 408"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <defs>
          <linearGradient id="line1-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1A202C"></stop>
            <stop offset="100%" stopColor="#1A202C"></stop>
          </linearGradient>
        </defs>
        <path
          d="M0,0 Q50,200 345,204 T690,408"
          stroke="#ED8936"
          strokeWidth="5"
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeDasharray="20 20"
        ></path>
        <motion.path
          d="M690,408Q640,208 345,204Q50,200 0,0"
          stroke="url(#line1-gradient)"
          strokeWidth="6"
          strokeLinejoin="round"
          strokeLinecap="round"
          pathLength="1"
          strokeDashoffset="0px"
          strokeDasharray="1px 1px"
          style={{
            pathLength: scrollYProgress,
          }}
          transition={{ duration: 2, delay: 0.5, ease: 'easeInOut' }}
        ></motion.path>
      </chakra.svg>
    </Box>
  )
}
