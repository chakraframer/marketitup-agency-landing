'use client'

import { Button, Flex, FlexProps, Text } from '@chakra-ui/react'

interface Props extends FlexProps {}

export default function ContactUsRegionBottons({}: Props) {
  const today = new Date()
  return (
    <Flex justifyContent={'space-between'} gap={4} flexWrap={'wrap'}>
      {btnData.map((btn, index) => (
        <Button
          key={index}
          variant={'outline'}
          border={'1px'}
          rounded={'full'}
          borderColor={'orange.300'}
          overflow={'hidden'}
          transition={'all 0.3s'}
          _before={{
            content: '"Contact Us"',
            position: 'absolute',
            left: 0,
            bottom: '100%',
            width: '100%',
            textAlign: 'center',
            backgroundColor: 'orange.300',
            color: 'black',
            padding: '0.6rem 0',
            transition: 'all 0.3s ease',
          }}
          _hover={{
            borderColor: 'transparent',
            _before: {
              bottom: '0',
            },
          }}
          as={Flex}
          gap={1}
        >
          {btn.label}:
          <Text as={'span'} fontWeight={'500'}>
            {today?.toLocaleTimeString([], {
              timeZone: btn.timezone,
              hour: '2-digit',
              minute: '2-digit',
              hour12: true,
            })}
          </Text>
        </Button>
      ))}
    </Flex>
  )
}

const btnData = [
  {
    label: 'India',
    timezone: 'Asia/Kolkata',
  },
  {
    label: 'United States',
    timezone: 'America/New_York',
  },
  {
    label: 'United Kingdom',
    timezone: 'Europe/London',
  },
  {
    label: 'France',
    timezone: 'Europe/Paris',
  },
]
