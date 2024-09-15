import React, { ReactNode } from 'react'

import {
  Box,
  Button,
  HStack,
  Heading,
  Icon,
  List,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import { FiCheck } from 'react-icons/fi'
import { pricingPlans } from '@/data/pricing.data'

export default function PricingCards() {
  const activeDefaultName = pricingPlans[1].name
  return (
    <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} gap={4}>
      {pricingPlans.map((plan) => (
        <PricingCard
          key={plan.name}
          {...plan}
          activeDefaultName={activeDefaultName}
        />
      ))}
    </SimpleGrid>
  )
}
type PricingCardProps = {
  name: string
  priceMonth: number
  features: string[]
  activeDefaultName: string
}
export const PricingCard = ({
  name,
  priceMonth,
  features,
  activeDefaultName,
}: PricingCardProps) => {
  const isSelected = activeDefaultName === name
  return (
    <Box
      bg="bg.surface"
      borderWidth={isSelected ? '2px' : 'none'}
      borderRadius="2xl"
      borderColor={isSelected ? 'orange.200' : 'transparent'}
      boxShadow={
        isSelected ? '0 0 15px 2px var(--chakra-colors-orange-100)' : 'none'
      }
      px={{ base: '6', md: '8' }}
      py="8"
      mb={6}
      width="full"
      maxW="lg"
    >
      <Stack height={'full'} gap={10} textAlign="center">
        <Stack align="center">
          <Text textStyle={{ base: 'md', md: 'lg' }} fontWeight="semibold">
            {name}
          </Text>
          <Heading size={{ base: 'md', md: 'lg' }}>${priceMonth}/mo</Heading>
          <Text>plus local taxes</Text>
        </Stack>
        <List spacing="4">
          {features.map((feature) => (
            <ListItem key={feature} textAlign={'left'}>
              <HStack spacing="4">
                <Icon as={FiCheck} boxSize="6" color={'orange.400'} />
                <Text>{feature}</Text>
              </HStack>
            </ListItem>
          ))}
        </List>
        <Button
          mt={'auto'}
          colorScheme="orange"
          border={'2px'}
          variant={isSelected ? 'solid' : 'outline'}
        >
          Buy Now
        </Button>
      </Stack>
    </Box>
  )
}
